package model;

import java.util.Date;

import javax.persistence.*;

import play.db.ebean.Model;

@Entity
@Table(name="public.raw_material")
public class RawMaterialModel extends Model {
	@Id
	int id;
	
	@Column(name="quantity")
	int quantity;
	@Column(name="price")
	int price;	
	@Column(name="name")
	String name;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
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
	public RawMaterialModel(int quantity, int price, String name) {
		this.name=name;
		this.quantity=quantity;
		this.price=price;
	}
	public static Finder<String,RawMaterialModel> find=new Finder<>(String.class,RawMaterialModel.class);
}
