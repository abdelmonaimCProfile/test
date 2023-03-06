package com.spring_demo.servicesImpl;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.spring_demo.dto.PostDto;
import com.spring_demo.dto.TagDto;
import com.spring_demo.dto.UserDto;
import com.spring_demo.entities.CategorieEntity;
import com.spring_demo.entities.PostEntity;
import com.spring_demo.entities.TagEntity;
import com.spring_demo.entities.UserEntity;
import com.spring_demo.enums.PostEnum;
import com.spring_demo.enums.PostState;
import com.spring_demo.enums.UserEnum;
import com.spring_demo.repositories.CategorieRepository;
import com.spring_demo.repositories.PostRepository;
import com.spring_demo.repositories.TagRepository;
import com.spring_demo.repositories.UserRepository;
import com.spring_demo.services.PostService;
import com.spring_demo.services.UserService;
import com.spring_demo.utils.Utils;

@Service
public class PostServiceImpl implements PostService {
	
	@Autowired
	PostRepository useRepository ;
	
	@Autowired
	CategorieRepository categRepository ;
	
	
	
	@Autowired
	UserService userService ;
	
	@Autowired
	UserRepository userRepository ;
	
	@Autowired
	TagRepository tagRepository ;
	
	@Autowired
	Utils util ;

	@Override
	public PostDto create(PostDto post) {

		ModelMapper modelMapper = new ModelMapper() ;
		
		
		
        Set<TagDto> itemm = new HashSet<>() ;
		
		
		Set<PostDto> setPost = new HashSet<>() ;
		setPost.add(post);
				
		for(TagDto item : post.getTags()) {
			
			item.setTag_id(util.generateStringId(20));
			item.setTag_slug(util.toSlug(item.getTag_name()));
			item.setPosts(setPost);
			itemm.add(item);
			post.setTags(itemm);
			
		}
		
		PostEntity postEntity = modelMapper.map(post,PostEntity.class) ; 
	
		postEntity.setPost_id(util.generateStringId(20));
		
		 LocalDateTime myDateObj = LocalDateTime.now();
		 DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("E, MMM dd yyyy HH:mm:ss");  
		 String formattedDate = myDateObj.format(myFormatObj);
		 
	   postEntity.setPost_creation_date(formattedDate);
	   postEntity.setPost_state("private");
	  
	  
	   
		
		 Authentication auth = SecurityContextHolder.getContext().getAuthentication() ;
		 String userName = auth.getName() ;
		 
		 UserEntity userDto = userRepository.findByEmail(userName) ;
        // UserEntity user = modelMapper.map(userDto, UserEntity.class) ;
		 
		 
		 userDto.getPosts().add(postEntity) ;
		 postEntity.setUser(userDto);
	   
	   CategorieEntity categorie = categRepository.findByName(post.getCateg_name()) ;
	   postEntity.setCategorie(categorie);
	   
	   PostEntity create = useRepository.save(postEntity) ;
	   PostDto postDto = modelMapper.map(create, PostDto.class);
	   
	
	return postDto;
			
	}

	@Override
	public PostDto update(PostDto post, String id) {
		
		ModelMapper modelMapper = new ModelMapper() ;

		PostEntity postEntity = useRepository.findById(id) ;
		if( postEntity == null ) throw new UsernameNotFoundException("post doesn't exist !") ;
		
		// PostEntity postt = modelMapper.map(post, PostEntity.class) ; 
		 PostDto existingPost = modelMapper.map(postEntity, PostDto.class);

		 // updating post 
		 existingPost.setPost_title(post.getPost_title());
		 existingPost.setPost_description(post.getPost_description());
		 existingPost.setPost_content(post.getPost_content());
		 existingPost.setPost_excrept(post.getPost_excrept());
		 existingPost.setPost_image(post.getPost_image());
		 existingPost.setPost_state("private");

		
		
		  // Update the post's category
	    CategorieEntity categorie = categRepository.findByName(post.getCateg_name());
	    postEntity.setCategorie(categorie);
	    
	    // Update the post's tags
	    Set<TagDto> newTags = post.getTags();
	    Set<TagDto> existingTags = existingPost.getTags();
	    Set<TagDto> tagsToAdd = new HashSet<>();
	    Set<TagDto> tagsToDelete = new HashSet<>();
	    
	    // Find tags to add and delete
	    for (TagDto newTag : newTags) {
	        boolean tagFound = false;
	        for (TagDto existingTag : existingTags) {
	            if (newTag.getTag_name().equals(existingTag.getTag_name())) {
	                tagFound = true;
	                break;
	            }
	        }
	        if (!tagFound) {
	            tagsToAdd.add(newTag);
	        }
	    }
	    
	    for (TagDto existingTag : existingTags) {
	        boolean tagFound = false;
	        for (TagDto newTag : newTags) {
	            if (newTag.getTag_name().equals(existingTag.getTag_name())) {
	                tagFound = true;
	                break;
	            }
	        }
	        if (!tagFound) {
	            tagsToDelete.add(existingTag);
	        }
	    }

	    // Add new tags
	    
	    for (TagDto tagToAdd : tagsToAdd) {
	        tagToAdd.setTag_id(util.generateStringId(20));
	        tagToAdd.setTag_slug(util.toSlug(tagToAdd.getTag_name()));
	        tagToAdd.setPosts(Collections.singleton(post));
	        existingTags.add(tagToAdd);
	    }

	    // Delete old tags
	    for (TagDto tagToDelete : tagsToDelete) {
	        existingTags.remove(tagToDelete);
	    }

	    // Save the updated post entity
	  //  PostEntity updatedPost = useRepository.save(existingPost);

	    // Map the updated post entity to a DTO and return it
	   // return modelMapper.map(updatedPost, PostDto.class);
	    
	    PostEntity postEntityN = modelMapper.map(existingPost, PostEntity.class);
	
      
		PostEntity update = useRepository.save(postEntityN);
		PostDto postDto = modelMapper.map(update, PostDto.class) ;
		
		
		return postDto ;
	}

	@Override
	public String delete(String id) {
		PostEntity postEntity = useRepository.findById(id) ;
		if( postEntity == null ) throw new UsernameNotFoundException("post doesn't exist !") ;
		
		useRepository.delete(postEntity) ;
		return "deleted";
	}

	@Override
	public PostDto display(String id) {
		PostEntity postEntity = useRepository.findById(id) ;
		if( postEntity == null ) throw new UsernameNotFoundException("post doesn't exist !") ;
		
		ModelMapper modelMapper = new ModelMapper() ;
		PostDto postDto = modelMapper.map(postEntity, PostDto.class) ;
		return postDto;
	}

	@Override
	public List<PostDto> getPost(int page, int limit, String search) {
        if(page > 0) page = page - 1 ;
		
		List<PostDto> posts = new ArrayList<>() ;
		Pageable pageableRequest = PageRequest.of(page, limit);
		
		Page<PostEntity> postPage ;
		
		if( search.isEmpty())
		{
			postPage = useRepository.getPost(pageableRequest) ;
		}
		else
		{
			postPage = useRepository.getByCriteria(pageableRequest, search);
		}
		
		List<PostEntity> postEntities = postPage.getContent() ;
		
		for(PostEntity item : postEntities)
		{
			ModelMapper modelMapper = new ModelMapper() ;
			PostDto postDto = modelMapper.map(item,PostDto.class) ;
			posts.add(postDto);
		}
		
		return posts;
	}

	@Override
	public List<PostDto> getPostByCategorie() {
		List<PostDto> posts = new ArrayList<>()  ;
		List<PostEntity> postEntity = useRepository.postsByCategorie() ;
		for(PostEntity item : postEntity )
		{
			ModelMapper modelMapper = new ModelMapper() ;
			PostDto postDto = modelMapper.map(item, PostDto.class) ;
			posts.add(postDto);
		}
		
		return posts;
	}

	@Override
	public List<PostDto> postsCategorie(String id) {
		List<PostDto> posts = new ArrayList<>() ;
		List<PostEntity> postsEntity = useRepository.postsCategorie(id);
		for(PostEntity item : postsEntity )
		{
			ModelMapper modelMapper = new ModelMapper() ;
			PostDto postDto = modelMapper.map(item, PostDto.class) ;
			posts.add(postDto);
		}
		
		return posts;
	}

	@Override
	public List<PostDto> getPublishPost(int page, int limit, String search) {
		if (page > 0 ) page = page - 1 ;
		List<PostDto> posts = new ArrayList<>() ;
		Pageable pageableRequest = PageRequest.of(page, limit) ;
		Page<PostEntity> postPage  ;
		
		if(search.isEmpty()) {
			postPage = useRepository.getPublishPost(pageableRequest) ;
			
		}else
		{
			postPage = useRepository.getPublishPostByCriteria(pageableRequest, search) ;
		}
		
		List<PostEntity> postEntity = postPage.getContent();
		for(PostEntity item : postEntity ) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			PostDto postDto = modelMapper.map(item, PostDto.class) ;
			posts.add(postDto);
		}
		return posts;
	}

	@Override
	public List<PostDto> getDraftPost(int page, int limit, String search) {
		if (page > 0 ) page = page - 1 ;
		List<PostDto> posts = new ArrayList<>() ;
		Pageable pageableRequest = PageRequest.of(page, limit) ;
		Page<PostEntity> postPage  ;
		
		if(search.isEmpty()) {
			postPage = useRepository.getDraftPost(pageableRequest) ;
			
		}else
		{
			postPage = useRepository.getDraftPostByCriteria(pageableRequest, search) ;
		}
		
		List<PostEntity> postEntity = postPage.getContent();
		for(PostEntity item : postEntity ) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			PostDto postDto = modelMapper.map(item, PostDto.class) ;
			posts.add(postDto);
		}
		return posts;
	}

	@Override
	public List<PostDto> getPrivatePost(int page, int limit, String search) {
		if (page > 0 ) page = page - 1 ;
		List<PostDto> posts = new ArrayList<>() ;
		Pageable pageableRequest = PageRequest.of(page, limit) ;
		Page<PostEntity> postPage  ;
		
		if(search.isEmpty()) {
			postPage = useRepository.getPrivatetPost(pageableRequest) ;
			
		}else
		{
			postPage = useRepository.getPrivatetPostByCriteria(pageableRequest, search) ;
		}
		
		List<PostEntity> postEntity = postPage.getContent();
		for(PostEntity item : postEntity ) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			PostDto postDto = modelMapper.map(item, PostDto.class) ;
			posts.add(postDto);
		}
		return posts;
	}

	@Override
	public List<PostDto> getAll(int page, int limit) {
	if(page > 0 ) page = page -1 ;
		
		List<PostDto> posts = new ArrayList<>() ;
		Pageable pageableRequest = PageRequest.of(page, limit);
		Page<PostEntity> postPage = useRepository.getAll(pageableRequest) ;
		List<PostEntity> postEntity = postPage.getContent();
		for(PostEntity item : postEntity )
		{
			ModelMapper modelMapper = new ModelMapper() ;
			PostDto postDto = modelMapper.map(item, PostDto.class) ;
			posts.add(postDto);
		}
		
		
		

		
		
		return posts;
	}

	@Override
	public List<PostDto> getUserPost(int page, int limit) {
		  if(page > 0 ) page = page -1 ;
			
			List<PostDto> posts = new ArrayList<>() ;


			 Authentication auth = SecurityContextHolder.getContext().getAuthentication() ;
			 String userName = auth.getName() ;
			 UserDto userDto = userService.getUser(userName) ;
			 
			
			Pageable pageableRequest = PageRequest.of(page, limit);
			Page<PostEntity> postPage = useRepository.getUserPost(pageableRequest, userDto.getId()) ;
			List<PostEntity> postEntity = postPage.getContent();
			for(PostEntity item : postEntity )
			{
				ModelMapper modelMapper = new ModelMapper() ;
				PostDto postDto = modelMapper.map(item, PostDto.class) ;
				posts.add(postDto);
			}
			
			return posts;
	}

	@Override
	public PostDto accepter(String id) {
		
		PostEntity postEntity = useRepository.findById(id) ;
		if( postEntity == null ) throw new UsernameNotFoundException("post doesn't exist !") ;
		
		postEntity.setPost_state("publish");
		postEntity.setPost_refused_by("");
		
		
		 LocalDateTime myDateObj = LocalDateTime.now();
		 DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("E, MMM dd yyyy HH:mm:ss");  
		 String formattedDate = myDateObj.format(myFormatObj);
		postEntity.setPost_modification_date(formattedDate);


		 Authentication auth = SecurityContextHolder.getContext().getAuthentication() ;
		 String userName = auth.getName() ;
		 postEntity.setPost_accepted_by(userName);
		 
		PostEntity update = useRepository.save(postEntity);

		ModelMapper modelMapper = new ModelMapper() ;
				PostDto post = modelMapper.map(update, PostDto.class);

		return post;

	}

	@Override
	public PostDto refuser(String id) {

		PostEntity postEntity = useRepository.findById(id) ;
		if( postEntity == null ) throw new UsernameNotFoundException("post doesn't exist !") ;
		
		postEntity.setPost_state("private");
		postEntity.setPost_accepted_by("");
		

        LocalDateTime myDateObj = LocalDateTime.now();
		 DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("E, MMM dd yyyy HH:mm:ss");  
		 String formattedDate = myDateObj.format(myFormatObj);
		postEntity.setPost_modification_date(formattedDate);


		 Authentication auth = SecurityContextHolder.getContext().getAuthentication() ;
		 String userName = auth.getName() ;
		 postEntity.setPost_refused_by(userName);
		 
		 
		PostEntity update = useRepository.save(postEntity);

		ModelMapper modelMapper = new ModelMapper() ;
		PostDto post = modelMapper.map(update, PostDto.class);

		return post ;
	}

}
