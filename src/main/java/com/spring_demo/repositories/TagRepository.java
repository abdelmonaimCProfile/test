package com.spring_demo.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.spring_demo.entities.TagEntity;


public interface TagRepository extends PagingAndSortingRepository<TagEntity, Long> {

	TagEntity save(TagEntity tagEntity);
	
	@Query(value="SELECT * FROM tags WHERE tags.tag_name =:name",nativeQuery=true)
	TagEntity getTagByName(@Param("name")String name) ;

}
