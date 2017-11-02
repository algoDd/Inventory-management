package helpers;

import dao.BillDao;
import model.BillModel;
import model.CodeModel;
import model.RmtotalModel;
import play.mvc.Result;

public class BillHelper {
	public int getCode(String code,CodeModel cmodel) {
		int price= BillDao.getCode(code,cmodel);
		return price;
	}
	public Boolean savepdf(BillModel bmodel) {
		Boolean check =BillDao.savepdf(bmodel);
		return check;
	}
	public Boolean savetotal(RmtotalModel rmodel) {
		Boolean check =BillDao.savetotal(rmodel);
		return check;
	}
}
