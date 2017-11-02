package model;

import java.util.Date;

import javax.persistence.*;

import play.db.ebean.Model;
@Entity
@Table(name="public.billsales")
public class BillModel extends Model{

		@Id
		int id;
		
		@Column(name="pdf")
		String pdf;
		@Column(name="invoice_no")
		String invoice_no;	
		@Column(name="total_amt")
		int total_amt;
		
		public int getId() {
			return id;
		}
		
		public String getPdf() {
			return pdf;
		}
		public void setPdf(String pdf) {
			this.pdf = pdf;
		}
		public String getInvoice_no() {
			return invoice_no;
		}
		public void setInvoice_no(String invoice_no) {
			this.invoice_no = invoice_no;
		}
		public int getTotal_amt() {
			return total_amt;
		}
		public void setTotal_amt(int total_amt) {
			this.total_amt = total_amt;
		}
		public BillModel(String pdf, String invoice_no, int total_amt) {
			this.pdf=pdf;
			this.invoice_no=invoice_no;
			this.total_amt=total_amt;
		}
		public static Finder<String,BillModel> find=new Finder<>(String.class,BillModel.class);
	}


