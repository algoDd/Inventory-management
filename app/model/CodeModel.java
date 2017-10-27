package model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.avaje.ebean.Model.Finder;

import play.db.ebean.Model;
@Entity
@Table(name="public.code")
public class CodeModel extends Model {
	
	@Id
		int id;
		
		@Column(name="code")
		String code;
		@Column(name="price")
		int price;
		public String getCode() {
			return code;
		}
		public void setCode(String code) {
			this.code = code;
		}
		public int getPrice() {
			return price;
		}
		public void setPrice(int price) {
			this.price = price;
		}
		public int getId() {
			return id;
		}	
		public CodeModel(String code) {
			
			this.code=code;
			this.price=price;
		}
		public static Finder<String,CodeModel> find=new Finder<>(String.class,CodeModel.class);
	}

