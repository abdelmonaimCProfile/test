package com.spring_demo.entities;


import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.spring_demo.enums.UserEnum;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity(name="users")
public class UserEntity implements Serializable {
	
	
	private static final long serialVersionUID = -3306841656001505519L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id ;
	
	@Column
	private String user_id ;
	
	@Column
	private String user_first_name ;
	
	@Column
	private String user_last_name ;
	
	@Column(unique=true)
	private String user_email_adresse ;
	
	@Column
	private String encryptedPassword ;
	
	@Column
	private String user_password ;
	
	@Column
	private String user_creation_date ;
	
	@Column
	private String user_birthday ;
	
	@Column
	private String user_city ;
	
	@Column
	private String user_country ;
	
	@Column
	private String user_phone_number ;
	
	@Column
	private String user_profile_image ;
	
	@Column
	private String user_twitter ;
	
	@Column
	private String user_facebook ;
	
	@Column
	private String user_instagram ;
	
	@Column
	private String user_linkedin ;
	
	
	@Column
	@Enumerated(EnumType.STRING)
	private UserEnum user_type  ;
	
	
	@OneToMany(mappedBy="user" ,  cascade=CascadeType.ALL)
	private Set<PostEntity> posts = new HashSet<>() ;
	
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getUser_first_name() {
		return user_first_name;
	}
	public void setUser_first_name(String user_first_name) {
		this.user_first_name = user_first_name;
	}
	public String getUser_last_name() {
		return user_last_name;
	}
	public void setUser_last_name(String user_last_name) {
		this.user_last_name = user_last_name;
	}
	public String getUser_email_adresse() {
		return user_email_adresse;
	}
	public void setUser_email_adresse(String user_email_adresse) {
		this.user_email_adresse = user_email_adresse;
	}
	public String getEncryptedPassword() {
		return encryptedPassword;
	}
	public void setEncryptedPassword(String encryptedPassword) {
		this.encryptedPassword = encryptedPassword;
	}
	public String getUser_creation_date() {
		return user_creation_date;
	}
	public void setUser_creation_date(String user_creation_date) {
		this.user_creation_date = user_creation_date;
	}
	public String getUser_birthday() {
		return user_birthday;
	}
	public void setUser_birthday(String user_birthday) {
		this.user_birthday = user_birthday;
	}
	public String getUser_city() {
		return user_city;
	}
	public void setUser_city(String user_city) {
		this.user_city = user_city;
	}
	public String getUser_country() {
		return user_country;
	}
	public void setUser_country(String user_country) {
		this.user_country = user_country;
	}
	public String getUser_phone_number() {
		return user_phone_number;
	}
	public void setUser_phone_number(String user_phone_number) {
		this.user_phone_number = user_phone_number;
	}
	public String getUser_profile_image() {
		return user_profile_image;
	}
	public void setUser_profile_image(String user_profile_image) {
		this.user_profile_image = user_profile_image;
	}
	public String getUser_twitter() {
		return user_twitter;
	}
	public void setUser_twitter(String user_twitter) {
		this.user_twitter = user_twitter;
	}
	public String getUser_facebook() {
		return user_facebook;
	}
	public void setUser_facebook(String user_facebook) {
		this.user_facebook = user_facebook;
	}
	public String getUser_instagram() {
		return user_instagram;
	}
	public void setUser_instagram(String user_instagram) {
		this.user_instagram = user_instagram;
	}
	public String getUser_linkedin() {
		return user_linkedin;
	}
	public void setUser_linkedin(String user_linkedin) {
		this.user_linkedin = user_linkedin;
	}
	public UserEnum getUser_type() {
		return user_type;
	}
	public void setUser_type(UserEnum user_type) {
		this.user_type = user_type;
	}
	public String getUser_password() {
		return user_password;
	}
	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}
	public Set<PostEntity> getPosts() {
		return posts;
	}
	public void setPosts(Set<PostEntity> posts) {
		this.posts = posts;
	}
	
	
	
	
	
	
	
	
	


	
	
	

}
