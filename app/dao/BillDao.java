package dao;

import java.util.List;

import com.avaje.ebean.ExpressionList;
import com.avaje.ebean.Query;

import model.CodeModel;
import play.mvc.Result;

public class BillDao {
	
	public static int getCode(String code,CodeModel cmodel) {
		int c3=0;
		try {
			//String code=cmodel.getCode();
			List<CodeModel> c=cmodel.find.select("price").where().eq("code",code).findList();
		//	Query a=c;
			CodeModel c1=c.get(0);
			c3=c1.getPrice();
			
		}catch(Exception e)
		{
			return 0;
		}
		return c3;
	}
}
