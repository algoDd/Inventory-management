package helpers;

import dao.LoginDAO;
import model.LoginModel;

public class LoginHelper {
	 public static LoginModel authenticateUser(LoginModel Lmodel)
	 {  LoginModel model=LoginDAO.getValidUserForUname(Lmodel);
	    if(model!=null)
	    {  // model.setLastlogin(Lmodel.getLastlogin());
	        	      	return model;
	    }
	    else
	    {	
	     return model;
	    } 
	 }
	 public static LoginModel checkUsername(String username)
	 {   return LoginDAO.checkUsername(username);
	 }
}
	 
	

