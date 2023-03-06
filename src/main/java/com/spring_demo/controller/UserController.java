package com.spring_demo.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring_demo.dto.UserDto;
import com.spring_demo.requests.UserRequest;
import com.spring_demo.responses.UserResponse;
import com.spring_demo.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {
	
	
	@Autowired 
	UserService service ;
	
	@PostMapping
	
	public ResponseEntity<UserResponse> createUser( @Valid @RequestBody UserRequest request) throws IOException{
		
		ModelMapper modelMapper = new ModelMapper() ;
		UserDto userDto = modelMapper.map(request,UserDto.class) ;
		UserDto createUser = service.createUser(userDto) ;
		UserResponse userResponse = modelMapper.map(createUser, UserResponse.class) ;
		
		return new ResponseEntity<UserResponse>(userResponse , HttpStatus.CREATED);
		
		}
	
	@GetMapping
	//@PreAuthorize("hasAuthority('SCOPE_ROLE_ADMIN')")
	public List<UserResponse> getAllUsers(  
			@RequestParam(value="page", defaultValue="1")int page 
			, @RequestParam(value="limit" , defaultValue="30") int limit
			,@RequestParam(value="seach" , defaultValue="") String seach
			
			){
		
		List<UserResponse> usersResponse = new ArrayList<>() ;
		
		List<UserDto>  usersDto = service.getAllUsers(page,limit,seach) ;
		
		for( UserDto item : usersDto ) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			UserResponse userResponse = modelMapper.map(item,UserResponse.class) ;
			usersResponse.add(userResponse) ;			
		}
		
		
		
		return usersResponse ;
		
	}
	
	@PutMapping(path="/{id}")
	//@PreAuthorize("hasAnyAuthority('SCOPE_ROLE_AUTHOR','SCOPE_ROLE_ADMIN')")
	public ResponseEntity<UserResponse> updateUser( @PathVariable String id , @RequestBody UserRequest request ) throws IOException{
		
		UserResponse userResponse = new UserResponse() ;
		byte[] file = request.getUser_profile_image().getBytes();
		ModelMapper modelMapper = new ModelMapper() ;
		UserDto update = modelMapper.map(request, UserDto.class);
		UserDto userDto = service.updateUser(id,update) ;
		userResponse = modelMapper.map(userDto, UserResponse.class) ; 
 		
		return new ResponseEntity<UserResponse>(userResponse,HttpStatus.OK) ;
	}
	
	@DeleteMapping(path="/{id}")
	//@PreAuthorize("hasAuthority('SCOPE_ROLE_ADMIN')")
	public ResponseEntity<String> deleteUser(@PathVariable String id ){
		
		String message = service.deleteUser(id) ;
		
		return new ResponseEntity<String>(message,HttpStatus.OK) ;
		
	}
	
	@GetMapping("/authors")
	public List<UserResponse> getAllAuthors(  
			@RequestParam(value="page", defaultValue="1")int page 
			, @RequestParam(value="limit" , defaultValue="30") int limit
			,@RequestParam(value="seach" , defaultValue="") String seach
			
			){
		
		List<UserResponse> usersResponse = new ArrayList<>() ;
		
		List<UserDto>  usersDto = service.getAllAuthors(page, limit, seach) ;
		
		for( UserDto item : usersDto ) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			UserResponse userResponse = modelMapper.map(item,UserResponse.class) ;
			usersResponse.add(userResponse) ;			
		}
		
		
		
		return usersResponse ;
		
	}
	
	@GetMapping("/admins")
	//@PreAuthorize("hasAuthority('SCOPE_ROLE_ADMIN')")
	public List<UserResponse> getAllAdmin(  
			@RequestParam(value="page", defaultValue="1")int page 
			, @RequestParam(value="limit" , defaultValue="30") int limit
			,@RequestParam(value="seach" , defaultValue="") String seach
			
			){
		
		List<UserResponse> usersResponse = new ArrayList<>() ;
		
		List<UserDto>  usersDto = service.getAllAdmins(page, limit, seach) ;
		
		for( UserDto item : usersDto ) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			UserResponse userResponse = modelMapper.map(item,UserResponse.class) ;
			usersResponse.add(userResponse) ;			
		}
		
		
		
		return usersResponse ;
		
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<UserResponse> display(@PathVariable String id){
		UserDto userDto = service.getUser(id);
		ModelMapper modelMapper = new ModelMapper() ;
		UserResponse userResponse = modelMapper.map(userDto, UserResponse.class) ;
		return new ResponseEntity<>(userResponse,HttpStatus.OK) ;
	}

}
