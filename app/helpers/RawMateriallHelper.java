package helpers;

import dao.RawMaterialDAO;
import model.RawMaterialModel;
import play.mvc.Result;

public class RawMateriallHelper {
	
 public Boolean rawMaterial(RawMaterialModel RMmodel) {
	return RawMaterialDAO.rawMaterial(RMmodel);
 }
 
}
