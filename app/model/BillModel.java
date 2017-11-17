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
		@Column(name="date")
		String date;
		@Column(name="status")
		String status;
		public String getStatus() {
			return status;
		}



		public void setStatus(String status) {
			this.status = status;
		}



		public String getDate() {
			return date;
		}

		

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
		public BillModel(String pdf, String invoice_no, int total_amt ,String date,String status) {
			this.pdf=pdf;
			this.invoice_no=invoice_no;
			this.total_amt=total_amt;
			this.date=date;
			this.status=status;
		}
		public void setDate(String date) {
			this.date = date;
		}
		public static Finder<String,BillModel> find=new Finder<>(String.class,BillModel.class);
	}


