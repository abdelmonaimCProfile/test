package com.spring_demo.requests;

import java.util.Set;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;



public class PostRequest {
	
  
	@NotBlank(message = "Post title is required !")
	@Size(min = 3 , message = "ce champ doit avoir plus que 3 caractères !")
	@Size(max = 200 , message = " ce champ doit avoir moins que 200 caractères !")
	private String post_title;
	
	
	@NotBlank(message = "Post excrept is required !")
	@Size(min = 3 , message = "ce champ doit avoir plus que 3 caractères !")
	@Size(max = 200 , message = " ce champ doit avoir moins que 200 caractères !")
	private String post_excrept;
	
	@NotBlank(message = "Post image is required !")
	private String post_image;
	
	@NotBlank(message = " Post Description is required !")
	@Size(min = 3 , message = "ce champ doit avoir plus que 3 caractères !")
	@Size(max = 500 , message = " ce champ doit avoir moins que 500 caractères !")
	private String post_description;
	
	@NotBlank(message = " Post Description is required !")
	@Size(min = 3 , message = "ce champ doit avoir plus que 3 caractères !")
	@Size(max = 6553500 , message = " ce champ doit avoir moins que 6553500 caractères !")
	private String post_content;
	
	private String categ_name ;

	//@NotBlank(message = "tags is required !")
	private Set<TagRequest>tags ;

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

	

	public String getCateg_name() {
		return categ_name;
	}

	public void setCateg_name(String categ_name) {
		this.categ_name = categ_name;
	}

	public Set<TagRequest> getTags() {
		return tags;
	}

	public void setTags(Set<TagRequest> tags) {
		this.tags = tags;
	}
	
	

}
