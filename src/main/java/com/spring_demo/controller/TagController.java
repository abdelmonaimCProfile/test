package com.spring_demo.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring_demo.dto.TagDto;
import com.spring_demo.requests.TagRequest;
import com.spring_demo.responses.TagResponse;
import com.spring_demo.services.TagService;



@RestController
@RequestMapping("/tags")
public class TagController {
	
	@Autowired
	TagService service ;
	
	@PostMapping
    public TagResponse create( @RequestBody TagRequest request ) {
		
		ModelMapper modelMapper = new ModelMapper() ;
		TagDto tagDto = modelMapper.map(request,TagDto.class) ;
		TagDto create = service.create(tagDto) ;
		TagResponse tag = modelMapper.map(create, TagResponse.class) ;
		return tag ;
	}

}
