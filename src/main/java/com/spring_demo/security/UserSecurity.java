package com.spring_demo.security;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spring_demo.entities.UserEntity;

public class UserSecurity implements UserDetails {
	
	
	private static final long serialVersionUID = 2539597555441591756L;
	
	
	private long id ;
	private String user_email_adresse ;
	 @JsonIgnore
	private String user_password ;
	 
	private Collection<? extends GrantedAuthority> authorities;
	
	


	public UserSecurity(long id, String user_email_adresse, String user_password,
			Collection<? extends GrantedAuthority> authorities) {
		super();
		this.id = id;
		this.user_email_adresse = user_email_adresse;
		this.user_password = user_password;
		this.authorities = authorities;
	}
	
	public static UserSecurity build(UserEntity user) {
		
        List<GrantedAuthority> authorities = List.of(new SimpleGrantedAuthority(user.getUser_type().name()));

		return new UserSecurity(
				user.getId(),
				user.getUser_email_adresse(),
				user.getUser_password(),
				authorities
				);
				
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return authorities;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return user_password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user_email_adresse;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	
	public long getId() {
		return id ;
	}

}
