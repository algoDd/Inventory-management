package dao;
import model.LoginModel;
import java.util.Iterator;
import java.util.List;
import com.avaje.ebean.Ebean;




public class LoginDAO {
	public static LoginModel getValidUserForUname(LoginModel lmodel) {
		try
		{  List<LoginModel> userList=LoginModel.find.where().eq("usernm", lmodel.getUsernm()).eq("passwd",lmodel.getPasswd()).findList();
			if(userList.isEmpty())
			{   return null;
			}
			
			else
			{	Iterator<LoginModel> iterator=userList.iterator();
			   LoginModel m=new LoginModel();
			   while(iterator.hasNext())
			   { m=iterator.next();
			     if(m.getUsernm().equals(lmodel.getUsernm()) && m.getPasswd().equals(lmodel.getPasswd()))
                  {     m.setLastlogin(lmodel.getLastlogin());
			    	    m.update();
	                    return m;
                  }
			   }
				   
			}
			return null;
			
		}catch(javax.persistence.PersistenceException e)
		{
		  return null;
		}
	}
	public static LoginModel checkUsername(String str)
	{  
		return LoginModel.find.where().eq("usernm", str).findUnique();
	  
	  
	}
	
}
