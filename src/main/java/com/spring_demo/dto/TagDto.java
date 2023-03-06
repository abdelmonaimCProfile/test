package com.spring_demo.dto;

import java.util.Set;


public class TagDto {
	
	private long id ;
	private String tag_id ;
	private String tag_name ;
	private String tag_slug ;
	private String tag_meta_title ;
	private String tag_meta_description ;
	private Set<PostDto> posts ;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTag_id() {
		return tag_id;
	}
	public void setTag_id(String tag_id) {
		this.tag_id = tag_id;
	}
	public String getTag_name() {
		return tag_name;
	}
	public void setTag_name(String tag_name) {
		this.tag_name = tag_name;
	}
	public String getTag_slug() {
		return tag_slug;
	}
	public void setTag_slug(String tag_slug) {
		this.tag_slug = tag_slug;
	}
	public String getTag_meta_title() {
		return tag_meta_title;
	}
	public void setTag_meta_title(String tag_meta_title) {
		this.tag_meta_title = tag_meta_title;
	}
	public String getTag_meta_description() {
		return tag_meta_description;
	}
	public void setTag_meta_description(String tag_meta_description) {
		this.tag_meta_description = tag_meta_description;
	}
	public Set<PostDto> getPosts() {
		return posts;
	}
	public void setPosts(Set<PostDto> posts) {
		this.posts = posts;
	}
	
	

	

}
