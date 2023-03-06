package com.spring_demo.services;

import java.util.List;

import com.spring_demo.dto.PostDto;

public interface PostService {
	
	PostDto create (PostDto post) ;
	PostDto update (PostDto post , String id ) ;
	String delete(String id ) ;
    PostDto display (String id) ;
	List<PostDto> getPost(int page , int limit , String search ) ;
	List<PostDto> getPostByCategorie() ;
	
	List<PostDto> postsCategorie(String id) ;
	// methods for admin
	
	List<PostDto> getPublishPost(int page , int limit , String search ) ;
	List<PostDto> getDraftPost(int page , int limit  , String search  ) ;
	List<PostDto> getPrivatePost(int page , int limit  , String search  ) ;
	List<PostDto> getAll(int page , int limit) ;
	
	
	// method for user
	
	List<PostDto> getUserPost(int page , int limit) ;
	
	PostDto accepter(String id) ;
	PostDto refuser(String id) ;



}
