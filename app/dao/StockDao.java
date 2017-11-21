package dao;

import java.util.List;

import com.avaje.ebean.Ebean;
import com.avaje.ebean.SqlUpdate;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import model.CodeModel;
import model.StockModel;
import play.libs.Json;
import play.mvc.Result;

public class StockDao {
	public static Boolean savestock(StockModel smodel) {
		try {
			List<StockModel> c=smodel.find.select("code").where().eq("code",smodel.getCode()).findList();
			if(c.isEmpty()) {
			Ebean.save(smodel);
			}else
			{   int quan=smodel.getQuantity();
			String code=smodel.getCode();
				String query="update stock set quantity=:quan where code=:code ";
				 SqlUpdate s=Ebean.createSqlUpdate(query).setParameter("quan", quan).setParameter("code",code);
				int rows=s.execute();
				
			}
		}catch(Exception e)
		{
			return false;
		}
		return true;
	}
	public static String update(StockModel smodel) {
		try {
			List<StockModel> c=smodel.find.select("code,quantity").where().eq("code",smodel.getCode()).findList();
			if(c.isEmpty()) {
			 return "no code exist";
			}else
			{   int quan=smodel.getQuantity();
			StockModel q=c.get(0);
			int quantity=q.getQuantity();
			String code=q.getCode();
			int updatedquan=quantity-quan;
			if(updatedquan<0)
			{
				return code+" : Stocks are less then required amount (Stock Left = "+quantity+")";
			}else if(updatedquan==0){
				
				String query="update stock set quantity=:quan, date=:date where code=:code ";
				SqlUpdate s=Ebean.createSqlUpdate(query).setParameter("quan", updatedquan).setParameter("code",code);
				int rows=s.execute();
				return code+" :  no unit left ! please add more stocks";
			}else if(updatedquan<5) {
				
				String query="update stock set quantity=:quan where code=:code ";
				SqlUpdate s=Ebean.createSqlUpdate(query).setParameter("quan", updatedquan).setParameter("code",code);
				int rows=s.execute();
				return code+" : Less then 5 units left!! add more";
			}else {
			
				String query="update stock set quantity=:quan where code=:code ";
				SqlUpdate s=Ebean.createSqlUpdate(query).setParameter("quan", updatedquan).setParameter("code",code);
				int rows=s.execute();
			   }
			}
		}catch(Exception e)
		{
			return "db error";
		}
		return "done";
	}
	public static ArrayNode getStocks() {
		ArrayNode arr=Json.newArray();
		try {
			List<StockModel> stock=StockModel.find.all();
			for(int i=0;i<stock.size();++i)
			{
				ObjectNode j=Json.newObject();
				j.put("code",stock.get(i).getCode() );
				j.put("quantity",stock.get(i).getQuantity() );
				arr.add(j);
			}
		}catch(Exception e) {
			return null;
		}
		return arr;
	}

}
