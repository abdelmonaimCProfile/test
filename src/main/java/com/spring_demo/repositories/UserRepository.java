package com.spring_demo.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.spring_demo.entities.UserEntity;


public interface UserRepository extends PagingAndSortingRepository<UserEntity,Long> {
	
	
	@Query(value="SELECT * FROM users WHERE users.user_email_adresse =:email",nativeQuery=true)
	UserEntity findByEmail(@Param("email")String email) ;

	UserEntity save(UserEntity userEntity);
	
	@Query(value="SELECT * FROM users WHERE users.user_id = :id " , nativeQuery=true)
	UserEntity findById( @Param("id") String id ) ;
	
	@Query(value="SELECT * FROM users ", countQuery="SELECT COUNT(*) FROM users",nativeQuery=true)
	Page<UserEntity> getAllUsers(Pageable pageableRequest) ;
	
	@Query(value="SELECT * FROM users WHERE users.user_type = 'ROLE_AUTHOR' ", countQuery="SELECT COUNT(*) FROM users" , nativeQuery=true)
	Page<UserEntity> getAllAuthors(Pageable pageableRequest) ;
	
	@Query(value="SELECT * FROM users WHERE users.user_type = 'ROLE_ADMIN' " , countQuery="SELECT COUNT(*) FROM users", nativeQuery=true)
	Page<UserEntity> getAllAdmins(Pageable pageableRequest) ;
	
	
	@Query(value="SELECT * FROM users WHERE  users.user_first_name LIKE %:seach% OR users.user_last_name LIKE %:seach%   " , countQuery="SELECT COUNT(*) FROM users", nativeQuery=true)
	Page<UserEntity> getAllUsersByCriteria(Pageable pageableRequest , @Param("seach") String seach  ) ;

	
	
	
	

	void delete(UserEntity userEntity);


}
