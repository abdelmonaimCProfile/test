package com.spring_demo.servicesImpl;


import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring_demo.dto.TagDto;
import com.spring_demo.entities.TagEntity;
import com.spring_demo.repositories.TagRepository;
import com.spring_demo.services.TagService;
import com.spring_demo.utils.Utils;

@Service
public class TagServiceImpl implements TagService {
	
	@Autowired
	TagRepository useRepository ;
	
	@Autowired
	Utils util ;

	@Override
	public TagDto create(TagDto request) {
		
		ModelMapper modelMapper = new ModelMapper() ;
		TagEntity tagEntity = modelMapper.map(request,TagEntity.class );
		
		
		
		tagEntity.setTag_id(util.generateStringId(20));
		tagEntity.setTag_slug(util.toSlug(tagEntity.getTag_name()));
		
		
		
		
		TagEntity tag = useRepository.save(tagEntity) ;
		TagDto tagDto = modelMapper.map(tag,TagDto.class) ;
		return tagDto;
	}

	@Override
	public String deleteTag(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<TagDto> getTag(int page, int limit, String search) {
		// TODO Auto-generated method stub
		return null;
	}

}
