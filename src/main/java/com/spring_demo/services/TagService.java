package com.spring_demo.services;

import java.util.List;

import com.spring_demo.dto.TagDto;


public interface TagService {
	

	TagDto create(TagDto request  ) ;
	String deleteTag(String id) ;
	List<TagDto> getTag(int page , int limit , String search ) ;
	


}
