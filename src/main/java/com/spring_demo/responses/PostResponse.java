package com.spring_demo.responses;

import java.util.Set;

public class PostResponse {
	
	private String post_id;
	private String post_title;
	private String post_excrept;
	private String post_image;
	private String post_description;
	private String post_content;
	private String post_creation_date;
	private String post_modification_date;
	private String post_state ;
	private String post_accepted_by;
	private String post_refused_by;
	private String user_last_name ;
	private String user_first_name ;
	private String categorie_name ;
	private Set<TagResponse> tags ;
	
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
	public String getCategorie_name() {
		return categorie_name;
	}
	public void setCategorie_name(String categorie_name) {
		this.categorie_name = categorie_name;
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
	public String getUser_last_name() {
		return user_last_name;
	}
	public void setUser_last_name(String user_last_name) {
		this.user_last_name = user_last_name;
	}
	public String getUser_first_name() {
		return user_first_name;
	}
	public void setUser_first_name(String user_first_name) {
		this.user_first_name = user_first_name;
	}
	public Set<TagResponse> getTags() {
		return tags;
	}
	public void setTags(Set<TagResponse> tags) {
		this.tags = tags;
	}
	
	
	

}
