package com.spring_demo.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity(name="tags")
public class TagEntity implements Serializable {

	
	private static final long serialVersionUID = 736109293486722815L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id ;
	
	@Column
	private String tag_id ;
	
	@Column
	private String tag_name ;
	
	@Column
	private String tag_slug ;
	
	@Column
	private String tag_meta_title ;
	
	@Column
	private String tag_meta_description ;
	
	@ManyToMany(fetch=FetchType.LAZY , cascade=CascadeType.ALL ,mappedBy = "tags")
	private Set<PostEntity> posts = new HashSet<>() ;

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

	public Set<PostEntity> getPosts() {
		return posts;
	}

	public void setPosts(Set<PostEntity> posts) {
		this.posts = posts;
	}
	
	
	
	
	

}
