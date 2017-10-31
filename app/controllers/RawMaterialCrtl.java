package controllers;

import play.mvc.Result;

import java.util.List;

import com.fasterxml.jackson.databind.JsonNode;

import helpers.RawMateriallHelper;
import model.RawMaterialModel;
import play.mvc.Controller;

public class RawMaterialCrtl extends Controller {
	RawMateriallHelper helper=new RawMateriallHelper();
	public Result rawMaterial(){
		JsonNode body=request().body().asJson();
		List<JsonNode> lname=body.findValues("name");
		List<JsonNode> lprice=body.findValues("price");
		List<JsonNode> lquantity=body.findValues("quantity");
		for(int i=0;i<lname.size();++i) {
		String name=lname.get(i).asText();
		int quantity=lquantity.get(i).asInt();
		int price=lprice.get(i).asInt();
		RawMaterialModel RMmodel=new RawMaterialModel(quantity,price,name);
		Boolean check=helper.rawMaterial(RMmodel);
		if(check==false)
		  {
			return badRequest("error Occured");
		 
		  }
		 }
		return ok("done");
	}
	
}
