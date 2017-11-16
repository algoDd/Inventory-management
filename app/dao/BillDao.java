package dao;

import java.sql.SQLException;
import java.util.List;

import com.avaje.ebean.Ebean;
import com.avaje.ebean.ExpressionList;
import com.avaje.ebean.Query;
import com.avaje.ebean.SqlQuery;
import com.avaje.ebean.SqlRow;
import com.avaje.ebean.SqlUpdate;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import model.BillModel;
import model.CodeModel;
import model.RmtotalModel;
import play.libs.Json;
import play.mvc.Result;

public class BillDao {
	
	public static ObjectNode getCode(String code,CodeModel cmodel) {
		int c3=0;String category="";
		ObjectNode j=Json.newObject();
		try {
			//String code=cmodel.getCode();
			List<CodeModel> c=cmodel.find.select("price,category").where().eq("code",code).findList();
		//	Query a=c;
			CodeModel c1=c.get(0);
			c3=c1.getPrice();
			category=c1.getCategory();
			
			j.put("price", c3);
			j.put("Category",category);
		}catch(Exception e)
		{
			return null;
		}
		return j;
	}
	public static Boolean savepdf(BillModel bmodel) {
		try {
			Ebean.save(bmodel);
		}catch(Exception e) {
			return false;
		}
		return true;
	}
	public static Boolean savetotal(RmtotalModel rmodel) {
		try {
			Ebean.save(rmodel);
		}catch(Exception e) {
			return false;
		}
		return true;
	}
	public static ArrayNode getpdf(String status) {
		ObjectMapper mapper = new ObjectMapper();
		
		
		ArrayNode b=Json.newArray();
		
		int i;
		try {
			//String code=cmodel.getCode();
			List<BillModel> c=BillModel.find.where().ieq("status", status).findList();
		//	Query a=c;
			for(i=0;i<c.size();i++)
			{
				ObjectNode j=mapper.createObjectNode();
				
//					a.add(x.getPdf());
//					a.add(x.getInvoice_no());
//					a.add( x.getDate());
				 
					j.put("pdf",c.get(i).getPdf());
					j.put("inVoice",c.get(i).getInvoice_no());
					j.put("date",c.get(i).getDate().toString());
					b.add(j);
				    
			}
			
			
		}catch(Exception e)
		{
			return null;
		}
		return b;
	}
	public static Boolean update(String inVoice) {
		
		try {
			//String code=cmodel.getCode();
			List<BillModel> c=BillModel.find.select("status").where().ieq("invoice_no", inVoice).findList();
		//	Query a=c;
				c.get(0).setStatus("C");
			Ebean.update(c.get(0));
		}catch(Exception e)
		{
			return false;
		}
		return true;
	}
	public static ObjectNode getSales(String date1,String date2) {
		ObjectNode j=Json.newObject();
		try {
			String query="select sum(total_amt) from billsales as total where date >=:date1 AND date <= :date2 ";
			SqlQuery s=Ebean.createSqlQuery(query).setParameter("date1", date1).setParameter("date2",date2);
			List<SqlRow> rows=s.findList();
			SqlRow a=rows.get(0);
			Integer sum=Integer.parseInt(a.getString("sum"));
			j.put("BillTotal", sum);
			String query2="select sum(rmtotal) from rmtotal as total where date >=:date1 AND date <= :date2 ";
			SqlQuery s2=Ebean.createSqlQuery(query2).setParameter("date1", date1).setParameter("date2",date2);
			List<SqlRow> rows2=s2.findList();
			SqlRow a2=rows2.get(0);
			Integer sum2=Integer.parseInt(a2.getString("sum"));
			j.put("RawTotal",  sum2);
			
		}catch(Exception e)
		{
			return null;
		}
		return j;
	
	
 }
}
