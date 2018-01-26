package model;

import java.sql.Date;

import javax.persistence.*;

import com.avaje.ebean.Model;


@Entity
@Table(name="public.login")
public class LoginModel extends Model {
	@Id
	int id;
	@Column(name="usernm")
	String usernm;
	@Column(name="passwd")
	String passwd;
	@Column(name="phone")
	int phone;
	@Column(name="lastlogin")
	Date lastlogin;
	@Column(name="name")
	String name;
	public Date getLastlogin() {
		return lastlogin;
	}
	public void setLastlogin(Date lastlogin) {
		this.lastlogin = lastlogin;
	}
	public int getId() {
		return id;
	}
	public String getUsernm() {
		return usernm;
	}
	public String getPasswd() {
		return passwd;
	}
	public int getPhone() {
		return phone;
	}
	public String getName() {
		return name;
	}
	
	public LoginModel() {
		// TODO Auto-generated constructor stub
	}
	public LoginModel(String unm,String pass,Date today)
	{
	   this.usernm=unm;
	   this.passwd=pass;
	   this.lastlogin=today;
	}
	public static Finder<String,LoginModel> find=new Finder<>(String.class,LoginModel.class);
	
	
}
