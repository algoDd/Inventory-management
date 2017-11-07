package dao;

import java.util.List;

import com.avaje.ebean.Ebean;
import com.avaje.ebean.ExpressionList;
import com.avaje.ebean.Query;
import com.avaje.ebean.SqlQuery;
import com.fasterxml.jackson.databind.JsonNode;
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
}
