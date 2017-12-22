package controllers;
import play.mvc.Result;
import play.libs.Mail;
import org.apache.commons.mail.*;
import java.sql.Date;
import java.util.Calendar;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import helpers.LoginHelper;
import model.LoginModel;
import play.libs.Json;
import play.mvc.Controller;

public class LoginCtrl extends Controller{
	  LoginModel lmodel; 
	  LoginModel check;
	@SuppressWarnings("deprecation")
	public Result login()
	{   //Check for cookies first
		// Get data from request body
		   JsonNode body=request().body().asJson();
		   JsonNode uname=body.findValue("uname");
		   JsonNode pass=body.findValue("passwd");
		   String unm=uname.textValue();
		   String pwd=pass.textValue();
		   boolean remember=body.findValue("remember").asBoolean();
		   Calendar rightNow=Calendar.getInstance();
		   String now="";
		   now+=(rightNow.get(Calendar.YEAR)+"-");
		   now+=(1+rightNow.get(Calendar.MONTH)+"-");
		   now+=(rightNow.get(Calendar.DATE));
		   Date today=Date.valueOf(now);
		   lmodel=new LoginModel(unm,pwd,today);
		   check=LoginHelper.authenticateUser(lmodel);
		   if(check!=null)
		   {   ObjectNode result=Json.newObject();
		   	   result.put("User",check.getName());
		   	   result.put("RedirectTo", "/index");
		   	   if(remember==true)
		   	   {
		   	      response().setCookie("LoginData",CaesarCipher.encrypt(check.getUsernm()+check.getPasswd()));
		   	   } 	   
		   	   
		   	   return ok(result);
		   }
		   else
		   {
			   return badRequest("Invalid Username or Password");
		   }
		
	}
	public Result forgotPassword()
	{   JsonNode body=request().body().asJson();
	   JsonNode uname=body.findValue("uname");
	    String unm=uname.textValue();
	    lmodel=LoginHelper.checkUsername(unm);
	    if(lmodel!=null)
	    {  SimpleEmail email = new SimpleEmail();
	    try
	      {
	    email.setFrom("anshretailsofficial@gmail.com","ANSHRETAILS");
	    email.addTo(unm);
	    email.setSubject("PASSWORD FOR LOGGING IN INTO ANSHRETAILS");
	    String message="Dear "+lmodel.getName()+",\n\n"+"You have requested this mail to be able to retrieve your password.";
	    message+="\nHERE ARE YOUR DETAILS ALONG WITH THE PASSWORD";
	    message+="\n\nUSERNAME :  "+lmodel.getUsernm();
	    message+="\n\nNAME     :  "+lmodel.getName();
	    message+="\n\nPASSWORD :  "+lmodel.getPasswd();
	    message+="\n\nREGISTERED PHONE NUMBER : "+lmodel.getPhone();
	    message+="\n\nPlease login using the above password.\n\nTHANKYOU.";
	    email.setHostName("smtp.gmail.com");
	    email.setAuthenticator(new DefaultAuthenticator("anshretailsofficial@gmail.com","anshretailsofficia"));
	    email.setSmtpPort(465);
	    email.setSSLOnConnect(true);
	    email.setMsg(message);
	    email.send();
	    return ok("YOUR PASSWORD HAS BEEN SENT TO "+unm);
	      }
	    catch(EmailException e)
	    {
	    	return badRequest("AN INTERNAL ERROR OCCURED DURING PASSWORD RECOVERY.INCOVENIENCE IS REGRETTED."+e);
	    }
	    }
	    else
	    {	return badRequest("Could Not Find Your Username.Make sure you have entered username correctly.");
	    }
	}
	
}	

