package helpers;

import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import dao.StockDao;
import model.StockModel;
import play.mvc.Result;

public class StockHelper {
	public Boolean savestock(StockModel smodel) {
		return StockDao.savestock(smodel);
	}
	public String update(StockModel smodel) {
		return StockDao.update(smodel);
	}
	public ArrayNode getStocks() {
		return StockDao.getStocks();
	}
}
