package com.spring_demo.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.spring_demo.enums.PostState;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

@Entity(name="posts")
public class PostEntity implements Serializable {
	
	
	private static final long serialVersionUID = -7609640447206495032L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(nullable=false ,length=30)
	private String post_id;
	
	@Column(nullable=false, length=200)
	private String post_title;
	
	@Column(nullable=false,length=300)
	private String post_excrept;
	
	@Column(nullable=false,length=500)
	private String post_image;
	
	@Column(nullable=false,length=500)
	private String post_description;
	
	@Column(nullable=false,length=6553500)
	private String post_content;
	
	@Column(nullable=false)
	private String post_creation_date;
	
	@Column(nullable = true)
	private String post_modification_date;
	
	@Column(nullable=false)
	private String post_state;
	
	@Column(nullable=true)
	private String post_accepted_by;
	
	@Column(nullable=true)
	private String post_refused_by;

	@ManyToOne
	@JoinColumn(name="users_id" )
	private UserEntity user ;
	
	
	@ManyToOne
	@JoinColumn(name="categ_id" )
	private CategorieEntity categorie ;
	
	@ManyToMany(fetch= FetchType.LAZY , cascade=CascadeType.ALL)
	@JoinTable(name="post_tag_asso" , joinColumns = {@JoinColumn(name="posts_id")} , inverseJoinColumns = {@JoinColumn(name="tags_id")})
	private Set<TagEntity> tags = new HashSet<>() ;

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

	public UserEntity getUser() {
		return user;
	}

	public void setUser(UserEntity user) {
		this.user = user;
	}

	public CategorieEntity getCategorie() {
		return categorie;
	}

	public void setCategorie(CategorieEntity categorie) {
		this.categorie = categorie;
	}

	public Set<TagEntity> getTags() {
		return tags;
	}

	public void setTags(Set<TagEntity> tags) {
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

	
	
	
	
	

}
