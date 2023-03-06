package com.spring_demo.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;


@Entity(name="categories")
public class CategorieEntity implements Serializable {

	
	private static final long serialVersionUID = 7292837929736909036L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id ;
	
	@Column
	private String categ_id ;
	
	@Column
	private String categ_name ;
	
	@Column
	private String categ_descrip ;
	
	@Column
	private String categ_image ;
	
	@ManyToOne
	@JoinColumn(name="parent_categ_id" , nullable=true)
	private CategorieEntity parent_categ_id ;
	
	@OneToMany(mappedBy="parent_categ_id" , cascade = CascadeType.ALL, fetch=FetchType.LAZY)
	private List<CategorieEntity> sous_categorie = new ArrayList<>() ;
	
	@OneToMany(mappedBy="categorie" , cascade = CascadeType.ALL ,fetch=FetchType.LAZY)
	private List<PostEntity> posts = new ArrayList<>() ;


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCateg_id() {
		return categ_id;
	}

	public void setCateg_id(String categ_id) {
		this.categ_id = categ_id;
	}

	public String getCateg_name() {
		return categ_name;
	}

	public void setCateg_name(String categ_name) {
		this.categ_name = categ_name;
	}

	public String getCateg_descrip() {
		return categ_descrip;
	}

	public void setCateg_descrip(String categ_descrip) {
		this.categ_descrip = categ_descrip;
	}

	public String getCateg_image() {
		return categ_image;
	}

	public void setCateg_image(String categ_image) {
		this.categ_image = categ_image;
	}

	public CategorieEntity getParent_categ_id() {
		return parent_categ_id;
	}

	public void setParent_categ_id(CategorieEntity parent_categ_id) {
		this.parent_categ_id = parent_categ_id;
	}

	public List<CategorieEntity> getSous_categorie() {
		return sous_categorie;
	}

	public void setSous_categorie(List<CategorieEntity> sous_categorie) {
		this.sous_categorie = sous_categorie;
	}

	public List<PostEntity> getPosts() {
		return posts;
	}

	public void setPosts(List<PostEntity> posts) {
		this.posts = posts;
	}

	

	
	
	
	
	


}
