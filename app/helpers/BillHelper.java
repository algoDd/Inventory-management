package helpers;

import com.fasterxml.jackson.databind.node.ObjectNode;

import dao.BillDao;

import model.BillModel;
import model.CodeModel;
import model.RmtotalModel;
import play.mvc.Result;

public class BillHelper {
	public ObjectNode getCode(String code,CodeModel cmodel) {
		ObjectNode category= BillDao.getCode(code,cmodel);
		return category;
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
