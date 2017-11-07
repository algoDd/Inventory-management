package controllers;

import java.util.List;

import com.fasterxml.jackson.databind.JsonNode;


import helpers.StockHelper;
import model.StockModel;
import play.mvc.Controller;
import play.mvc.Result;

public class StockCrtl extends Controller{
	StockHelper helper=new StockHelper(); 
	public Result savestock() {
		JsonNode body=request().body().asJson();List<JsonNode> lcode=body.findValues("code");
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
}
