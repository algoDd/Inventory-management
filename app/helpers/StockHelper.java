package helpers;

import dao.StockDao;
import model.StockModel;
import play.mvc.Result;

public class StockHelper {
	public Boolean savestock(StockModel smodel) {
		return StockDao.savestock(smodel);
	}
}
