package helpers;

import dao.BillDao;
import model.CodeModel;
import play.mvc.Result;

public class BillHelper {
	public int getCode(String code,CodeModel cmodel) {
		int price= BillDao.getCode(code,cmodel);
		return price;
	}
}
