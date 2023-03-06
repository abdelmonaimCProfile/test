package com.spring_demo.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;



public class PostDto implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -8353818059070849658L;
	private long id;
	private String post_id;
	private String post_title;
	private String post_excrept;
	private String post_image;
	private String post_description;
	private String post_content;
	private String post_creation_date;
	private String post_modification_date;
	private String post_state;
	private String post_accepted_by;
	private String post_refused_by;
	private UserDto user ;
	private CategorieDto categorie ;
	private String categ_name ;
	private Set<TagDto> tags = new HashSet<>() ;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getPost_id() {
		return post_id;
	}
	public void setPost_id(String post_id) {
		this.post_id = post_id;
	}
	public String getPost_title() {
		return post_title;
	}
	public void setPost_title(String post_title) {
		this.post_title = post_title;
	}
	public String getPost_excrept() {
		return post_excrept;
	}
	public void setPost_excrept(String post_excrept) {
		this.post_excrept = post_excrept;
	}
	public String getPost_image() {
		return post_image;
	}
	public void setPost_image(String post_image) {
		this.post_image = post_image;
	}
	public String getPost_description() {
		return post_description;
	}
	public void setPost_description(String post_description) {
		this.post_description = post_description;
	}
	public String getPost_content() {
		return post_content;
	}
	public void setPost_content(String post_content) {
		this.post_content = post_content;
	}
	public String getPost_creation_date() {
		return post_creation_date;
	}
	public void setPost_creation_date(String post_creation_date) {
		this.post_creation_date = post_creation_date;
	}
	public String getPost_modification_date() {
		return post_modification_date;
	}
	public void setPost_modification_date(String post_modification_date) {
		this.post_modification_date = post_modification_date;
	}
	
	public String getPost_state() {
		return post_state;
	}
	public void setPost_state(String post_state) {
		this.post_state = post_state;
	}
	
	public UserDto getUser() {
		return user;
	}
	public void setUser(UserDto user) {
		this.user = user;
	}
	
	public CategorieDto getCategorie() {
		return categorie;
	}
	public void setCategorie(CategorieDto categorie) {
		this.categorie = categorie;
	}
	public Set<TagDto> getTags() {
		return tags;
	}
	public void setTags(Set<TagDto> tags) {
		this.tags = tags;
	}
	public String getPost_accepted_by() {
		return post_accepted_by;
	}
	public void setPost_accepted_by(String post_accepted_by) {
		this.post_accepted_by = post_accepted_by;
	}
	public String getPost_refused_by() {
		return post_refused_by;
	}
	public void setPost_refused_by(String post_refused_by) {
		this.post_refused_by = post_refused_by;
	}
	public String getCateg_name() {
		return categ_name;
	}
	public void setCateg_name(String categ_name) {
		this.categ_name = categ_name;
	}
	


}
