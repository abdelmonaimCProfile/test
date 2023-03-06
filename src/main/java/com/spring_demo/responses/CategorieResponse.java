package com.spring_demo.responses;

import java.util.List;




public class CategorieResponse {
	
   private String categ_id ;
	
	
	private String categ_name ;
	
	
	private String categ_descrip ;
	
	
	private String categ_image ;
	
	private List<CategorieResponse> sous_categorie  ;
	
	private List<PostResponse> posts  ;

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

	public List<CategorieResponse> getSous_categorie() {
		return sous_categorie;
	}

	public void setSous_categorie(List<CategorieResponse> sous_categorie) {
		this.sous_categorie = sous_categorie;
	}

	public List<PostResponse> getPosts() {
		return posts;
	}

	public void setPosts(List<PostResponse> posts) {
		this.posts = posts;
	}
	
	
	
	

}
