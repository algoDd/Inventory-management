package model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.avaje.ebean.Model.Finder;

import play.db.ebean.Model;
@Entity
@Table(name="public.rmtotal")
public class RmtotalModel extends Model {
	
	@Id
		int id;
		
		@Column(name="rmtotal")
		int rmtotal;
		
		
		public int getRmtotal() {
			return rmtotal;
		}
		public void setRmtotal(int rmtotal) {
			this.rmtotal = rmtotal;
		}
		public int getId() {
			return id;
		}	
		public RmtotalModel(int rmtotal) {
			
			this.rmtotal = rmtotal;
		}
		public static Finder<String,RmtotalModel> find=new Finder<>(String.class,RmtotalModel.class);
	}