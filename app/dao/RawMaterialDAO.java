package dao;

import com.avaje.ebean.Ebean;

import model.RawMaterialModel;
import play.mvc.Results;


public class RawMaterialDAO {
	public static Boolean rawMaterial(RawMaterialModel RMmodel) {
	 try {
		 Ebean.save(RMmodel);
	 }catch(Exception e) {
		return false; 
	 }
	 return true;
	}
	
}
