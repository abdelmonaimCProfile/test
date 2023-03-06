package com.spring_demo.controller;


import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring_demo.dto.PostDto;
import com.spring_demo.requests.PostRequest;
import com.spring_demo.responses.PostResponse;
import com.spring_demo.services.PostService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/posts")
public class PostController {
	
	@Autowired
	PostService service ;
	
	@PostMapping
	public ResponseEntity<PostResponse> create(@Valid @RequestBody PostRequest postRequest ){
		
		 ModelMapper modelMapper = new ModelMapper();

		   PostDto postDto = modelMapper.map(postRequest,PostDto.class) ;

		    PostDto create = service.create(postDto);

		    PostResponse post = modelMapper.map(create,PostResponse.class);
		
		return new ResponseEntity<PostResponse>(post,HttpStatus.CREATED) ;
		}
	
	@GetMapping(path="/{id}")
	//@PreAuthorize("hasAnyAuthority('ROLE_AUTHOR','ROLE_ADMIN')")
	public ResponseEntity<PostResponse> displayPost(@PathVariable String id ){
		
		PostDto post = service.display(id) ;
		ModelMapper modelMapper = new ModelMapper() ;
		PostResponse response = modelMapper.map(post,PostResponse.class) ;
		
		return new ResponseEntity<PostResponse>(response , HttpStatus.ACCEPTED) ;
	}
	
	@PutMapping(path="/{id}")
	//@PreAuthorize("hasAnyAuthority('ROLE_AUTHOR','ROLE_ADMIN')")
	public ResponseEntity<PostResponse> updatePost(@PathVariable String id , @Valid @RequestBody PostDto post ){
		
		PostDto poste = service.update(post,id) ;
		ModelMapper modelMapper = new ModelMapper() ;
		PostResponse response = modelMapper.map(poste, PostResponse.class) ;
		
		return new ResponseEntity<PostResponse>(response,HttpStatus.ACCEPTED) ;

	}
	
	@DeleteMapping(path="/{id}")
	//@PreAuthorize("hasAnyAuthority('ROLE_AUTHOR','ROLE_ADMIN')")
	public ResponseEntity<String> deletePost(@PathVariable String id ){
	
		String message = service.delete(id);
		return new ResponseEntity<String>(message,HttpStatus.OK) ;
		
	}
	
	@GetMapping
	public ResponseEntity<List<PostResponse>> getPosts(
			@RequestParam(value = "page" , defaultValue = "1") int page 
			, @RequestParam(value = "limit" , defaultValue = "4") int limit 
			, @RequestParam(value = "search" , defaultValue = "") String search ){
		
		List<PostResponse> posts = new ArrayList<>() ;
		
		List<PostDto> postDto = service.getPost(page, limit, search) ;
		for( PostDto item : postDto) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			PostResponse post = modelMapper.map(item, PostResponse.class) ;
			posts.add(post);
		}
		return new ResponseEntity<List<PostResponse>>(posts , HttpStatus.OK) ;
	}
	
	
	// for admin 
	
	@GetMapping("/admin")
	//@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public ResponseEntity<List<PostResponse>> getAll(
			@RequestParam(value = "page" , defaultValue = "1") int page 
			, @RequestParam(value = "limit" , defaultValue = "9") int limit ){
		
        List<PostResponse> posts = new ArrayList<>() ;
		
		List<PostDto> postDto = service.getAll(page, limit) ;
		for( PostDto item : postDto) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			PostResponse post = modelMapper.map(item, PostResponse.class) ;
			posts.add(post);
		}
		return new ResponseEntity<List<PostResponse>>(posts , HttpStatus.OK) ;
	}
	
	@GetMapping("/admin/publish")
	//@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public ResponseEntity<List<PostResponse>> getPublishPost(
			@RequestParam(value = "page" , defaultValue = "1") int page 
			, @RequestParam(value = "limit" , defaultValue = "9") int limit
			, @RequestParam(value = "search" , defaultValue = "") String search ){
		
        List<PostResponse> posts = new ArrayList<>() ;
		
		List<PostDto> postDto = service.getPublishPost(page, limit, search) ;
		for( PostDto item : postDto) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			PostResponse post = modelMapper.map(item, PostResponse.class) ;
			posts.add(post);
		}
		return new ResponseEntity<List<PostResponse>>(posts , HttpStatus.OK) ;
	}
	
	@GetMapping("/admin/draft")
	@PreAuthorize("hasAuthority('SCOPE_ROLE_ADMIN')")
	public ResponseEntity<List<PostResponse>> getDraftPost(
			@RequestParam(value = "page" , defaultValue = "1") int page 
			, @RequestParam(value = "limit" , defaultValue = "9") int limit
			, @RequestParam(value = "search" , defaultValue = "") String search ){
		
        List<PostResponse> posts = new ArrayList<>() ;
		
		List<PostDto> postDto = service.getDraftPost(page, limit, search) ;
		for( PostDto item : postDto) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			PostResponse post = modelMapper.map(item, PostResponse.class) ;
			posts.add(post);
		}
		return new ResponseEntity<List<PostResponse>>(posts , HttpStatus.OK) ;
	}
	
	@GetMapping("/admin/private")
	//@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public ResponseEntity<List<PostResponse>> getPrivatePost(
			@RequestParam(value = "page" , defaultValue = "1") int page 
			, @RequestParam(value = "limit" , defaultValue = "9") int limit
			, @RequestParam(value = "search" , defaultValue = "") String search ){
		
        List<PostResponse> posts = new ArrayList<>() ;
		
		List<PostDto> postDto = service.getPrivatePost(page, limit, search) ;
		for( PostDto item : postDto) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			PostResponse post = modelMapper.map(item, PostResponse.class) ;
			posts.add(post);
		}
		return new ResponseEntity<List<PostResponse>>(posts , HttpStatus.OK) ;
	}
	
	@GetMapping("/user/post")
	//@PreAuthorize("hasAnyAuthority('ROLE_AUTHOR','ROLE_ADMIN')")
	public ResponseEntity<List<PostResponse>> getPrivatePost(
			@RequestParam(value = "page" , defaultValue = "1") int page 
			, @RequestParam(value = "limit" , defaultValue = "9") int limit){
		
        List<PostResponse> posts = new ArrayList<>() ;
		
		List<PostDto> postDto = service.getUserPost(page, limit) ;
		for( PostDto item : postDto) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			PostResponse post = modelMapper.map(item, PostResponse.class) ;
			posts.add(post);
		}
		return new ResponseEntity<List<PostResponse>>(posts , HttpStatus.OK) ;
	}
	
	
	@GetMapping("/post/categorie")
	public ResponseEntity<List<PostResponse>> getPostByCategorie(){
		List<PostResponse> posts = new ArrayList<>() ;
		List<PostDto> postDto = service.getPostByCategorie() ;
        for( PostDto item : postDto) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			PostResponse post = modelMapper.map(item, PostResponse.class) ;
			posts.add(post);
		}
		return new ResponseEntity<List<PostResponse>>(posts , HttpStatus.OK) ;
	}
	
	
	
	@GetMapping("/posts/categorie/{id}" )
	public ResponseEntity<List<PostResponse>> postsCategorie(@PathVariable String id){
		List<PostResponse> posts = new ArrayList<>() ;
		List<PostDto> postDto = service.postsCategorie(id) ;
        for( PostDto item : postDto) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			PostResponse post = modelMapper.map(item, PostResponse.class) ;
			posts.add(post);
		}
		return new ResponseEntity<>(posts , HttpStatus.OK) ;
	}
	
	@PutMapping("/accepter/{id}")
	public ResponseEntity<PostDto> accepterPost(@PathVariable String id){
		
		PostDto method = service.accepter(id);
		
		return new ResponseEntity<>(method,HttpStatus.OK) ;
		
	}
	
	@PutMapping("/refuser/{id}")
	public ResponseEntity<PostDto> refuserPost(@PathVariable String id){
		
		PostDto method = service.refuser(id);
		
		return new ResponseEntity<>(method,HttpStatus.OK) ;
		
	}
	
	
	
	
	
}
