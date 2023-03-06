package com.spring_demo.services;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.spring_demo.dto.UserDto;


public interface UserService extends UserDetailsService {
	
   UserDto getUser(String id) ;
	
	UserDto createUser(UserDto user) ;
	UserDto updateUser(String user_id , UserDto user) ;
	String deleteUser (String id) ;
	
	List<UserDto> getAllUsers( int page , int limit , String seach  ) ;
	
	List<UserDto> getAllAuthors( int page , int limit , String seach  ) ;
	List<UserDto> getAllAdmins( int page , int limit , String seach  ) ;

}
