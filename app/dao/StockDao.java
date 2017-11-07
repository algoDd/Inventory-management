package dao;

import com.avaje.ebean.Ebean;

import model.StockModel;

public class StockDao {
	public static Boolean savestock(StockModel smodel) {
		try {
			
			Ebean.save(smodel);
		}catch(Exception e)
		{
			return false;
		}
		return true;
	}

}
