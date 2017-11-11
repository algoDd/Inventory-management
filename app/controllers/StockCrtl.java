package controllers;

import java.util.List;

import com.avaje.ebean.Ebean;
import com.avaje.ebean.SqlUpdate;
import com.fasterxml.jackson.databind.JsonNode;


import helpers.StockHelper;
import model.StockModel;
import play.mvc.Controller;
import play.mvc.Result;

public class StockCrtl extends Controller{
	StockHelper helper=new StockHelper(); 
	public Result savestock() {
		JsonNode body=request().body().asJson();
		List<JsonNode> lcode=body.findValues("code");
		List<JsonNode> lcatagory=body.findValues("catagory");
		List<JsonNode> lquantity=body.findValues("quantity");
		for(int i=0;i<lcode.size();++i) {
		String code=lcode.get(i).asText();
		int quantity=lquantity.get(i).asInt();
		String category=lcatagory.get(i).asText();
		StockModel smodel=new StockModel(quantity,code,category);
		Boolean check =helper.savestock(smodel);
		if(check==false)
		  {
			return badRequest("error Occured");
		 
		  }
		
		
		}
		return ok("done");
		
	
	}
	public Result update() {
		JsonNode body=request().body().asJson();
		String code=body.get("code").asText();
		int quantity=body.get("quantity").asInt();
		StockModel smodel=new StockModel(quantity,code);
		String check =helper.update(smodel);
		if(check=="no code exist") {
			 return badRequest("Code Doesn't Exist In Stocks Please Check Your Code And Try Again");
			}else if(check.contains("Stocks are less then required amount stock =")){
				return badRequest(check);
			}else {
			
				return ok(check);
			}
				
	}
}
