package helpers;

import com.fasterxml.jackson.databind.node.ArrayNode;
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
	public ArrayNode getpdf(String status) {
		ArrayNode pdf =BillDao.getpdf(status);
		return pdf;
	}
	public Boolean update(String inVoice) {
		Boolean check =BillDao.update(inVoice);
		return check;
	}
	public ObjectNode getSales(String date1,String date2) {
		ObjectNode check =BillDao.getSales(date1,date2);
		return check;
	}
}
