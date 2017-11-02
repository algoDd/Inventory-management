package controllers;

import com.fasterxml.jackson.databind.JsonNode;

import helpers.BillHelper;
import model.BillModel;
import model.CodeModel;
import model.RmtotalModel;
import play.mvc.Controller;
import play.mvc.Result;

public class BillCrtl extends Controller {
	BillHelper helper=new BillHelper(); 
	public Result getCode() {
		JsonNode body=request().body().asJson();
		String code=body.get("code").asText();
		CodeModel cmodel=new CodeModel(code);
		int p =helper.getCode(code,cmodel);
		if(p!=0)
		{
			String price=String.valueOf(p);
			return ok(price);
		}else
		{
			return badRequest("db error");
		}
		
	
	}
	public Result savepdf() {
		JsonNode body=request().body().asJson();
		String pdf=body.get("pdf").asText();
		String invoice_no=body.get("invoice_no").asText();
		int total_amt=body.get("total_amt").asInt();
		BillModel bmodel=new BillModel(pdf,invoice_no,total_amt);
		Boolean check=helper.savepdf(bmodel);
		if(check==true)
		{
			return ok("done");
		}else
		{
			return badRequest("db error");
		}
	}
	public Result savetotal() {
		JsonNode body=request().body().asJson();
		int rmtotal=body.get("rmtotal").asInt();
		
		
		RmtotalModel rmodel=new RmtotalModel(rmtotal);
		Boolean check=helper.savetotal(rmodel);
		if(check==true)
		{
			return ok("done");
		}else
		{
			return badRequest("db error");
		}
	}
}
