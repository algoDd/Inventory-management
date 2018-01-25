package controllers;

import java.util.Date;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

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
		String code=body.get("code").asText().toUpperCase();
		CodeModel cmodel=new CodeModel(code);
		ObjectNode category =helper.getCode(code,cmodel);
		if(category!=null)
		{
//			String c=category.get("Category").asText();
//			int price
			return ok(category);
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
		String date=body.get("date").asText();
		String status=body.get("status").asText();
		BillModel bmodel=new BillModel(pdf,invoice_no,total_amt,date,status);
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
	public Result getpdf(String status) {
		ArrayNode category =helper.getpdf(status);
		if(category!=null)
		{
//			String c=category.get("Category").asText();
//			int price
			return ok(category);
		}else
		{
			return badRequest("db error");
		}
		
	}
	public Result update() {
		JsonNode body=request().body().asJson();
		String inVoice=body.get("inVoice").asText();
		Boolean check=helper.update(inVoice);
		if(check==true)
		{
			return ok("done");
		}else
		{
			return badRequest("db error");
		}
	}
	public Result getSales() {
		JsonNode body=request().body().asJson();
		String date1=body.get("date1").asText();
		String date2=body.get("date2").asText();
		ObjectNode check=helper.getSales(date1,date2);
		if(check==null)
		{
			return badRequest("db error");
		}else
		{
			return ok(check);
		}
	}
}
