package com.spring_demo.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.spring_demo.entities.PostEntity;

public interface PostRepository extends PagingAndSortingRepository<PostEntity, Long> {

	PostEntity save(PostEntity postEntity);
	

	// get post by id
	@Query(value="SELECT * FROM posts WHERE posts.post_id = :id" , nativeQuery=true)
	PostEntity findById(@Param("id")String id);

	void delete(PostEntity postEntity);
	
	// get post by title or description for user
	@Query(value="SELECT * FROM posts WHERE (posts.post_title LIKE %:search% OR posts.post_description LIKE %:search%) AND posts.post_state = 'publier' ", countQuery="SELECT COUNT(*) FROM posts",nativeQuery=true)
	Page<PostEntity> getByCriteria(Pageable pageableRequest , @Param("search") String search) ;
	
	// get all posts for user
	@Query(value="SELECT * FROM posts WHERE posts.post_state = 'publish'  ORDER BY post_modification_date DESC  ", nativeQuery=true)
	Page<PostEntity> getPost(Pageable pageableRequest) ;
	
	// method for user 
	@Query(value = "SELECT * FROM  posts WHERE posts.users_id = :id" ,countQuery="SELECT COUNT(*) FROM posts", nativeQuery=true)
	Page<PostEntity> getUserPost(Pageable pageableRequest , @Param("id") long id ) ;
	
	
	// get all posts for admin
	
	@Query(value="SELECT * FROM posts ",countQuery="SELECT COUNT(*) FROM posts", nativeQuery=true)
	Page<PostEntity> getAll(Pageable pageableRequest) ;
	
	// get all publish post 
	@Query(value="SELECT * FROM posts WHERE posts.post_state = 'publish'  ",countQuery="SELECT COUNT(*) FROM posts", nativeQuery=true)
	Page<PostEntity> getPublishPost(Pageable pageableRequest ) ;
	
	// get post where state = publish
	@Query(value="SELECT * FROM posts WHERE posts.post_state = 'publish' AND posts.post_title LIKE %:search% ",countQuery="SELECT COUNT(*) FROM posts", nativeQuery=true)
	Page<PostEntity> getPublishPostByCriteria(Pageable pageableRequest , @Param("search") String search) ;
	
	// get all draft post
	@Query(value="SELECT * FROM posts WHERE posts.post_state = 'draft' ",countQuery="SELECT COUNT(*) FROM posts" , nativeQuery=true)
    Page<PostEntity> getDraftPost(Pageable pageableRequest ) ;
	
	// get post where state = draft
	@Query(value="SELECT * FROM posts WHERE posts.post_state = 'draft'  AND posts.post_title LIKE %:search% ",countQuery="SELECT COUNT(*) FROM posts" , nativeQuery=true)
    Page<PostEntity> getDraftPostByCriteria(Pageable pageableRequest , @Param("search") String search) ;
	
	// get all private post 
	@Query(value="SELECT * FROM posts WHERE posts.post_state = 'private' ",countQuery="SELECT COUNT(*) FROM posts" , nativeQuery=true)
	Page<PostEntity> getPrivatetPost(Pageable pageableRequest ) ;
	
	// get post where state = private
	@Query(value="SELECT * FROM posts WHERE posts.post_state = 'private'   AND posts.post_title LIKE %:search% ",countQuery="SELECT COUNT(*) FROM posts" , nativeQuery=true)
	Page<PostEntity> getPrivatetPostByCriteria(Pageable pageableRequest , @Param("search") String search) ;
	
	
	
	// post by categorie 
	@Query(value= "SELECT * FROM posts WHERE posts.post_state = 'publish' GROUP BY categ_id  ORDER BY post_modification_date ",countQuery="SELECT COUNT(*) FROM posts" , nativeQuery=true)
	List<PostEntity> postsByCategorie() ;
	
	// all posts categorie
	@Query(value= "SELECT * FROM posts WHERE posts.post_state = 'publish' AND posts.categ_id = :id ",countQuery="SELECT COUNT(*) FROM posts" , nativeQuery=true)
	List<PostEntity> postsCategorie(@Param("id") String id ) ;
	

}
