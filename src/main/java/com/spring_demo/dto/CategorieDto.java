package com.spring_demo.dto;

import java.util.List;

public class CategorieDto {
	
	
	private long id ;
	
	
	private String categ_id ;
	
	
	private String categ_name ;
	
	
	private String categ_descrip ;
	
	
	private String categ_image ;
	
	
	private CategorieDto parent_categ_id ;
	
	
	private List<CategorieDto> sous_categorie  ;
	
	private List<PostDto> posts  ;



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


	

	public CategorieDto getParent_categ_id() {
		return parent_categ_id;
	}


	public void setParent_categ_id(CategorieDto parent_categ_id) {
		this.parent_categ_id = parent_categ_id;
	}


	public List<CategorieDto> getSous_categorie() {
		return sous_categorie;
	}


	public void setSous_categorie(List<CategorieDto> sous_categorie) {
		this.sous_categorie = sous_categorie;
	}


	public List<PostDto> getPosts() {
		return posts;
	}


	public void setPosts(List<PostDto> posts) {
		this.posts = posts;
	}
	
	


	


}
