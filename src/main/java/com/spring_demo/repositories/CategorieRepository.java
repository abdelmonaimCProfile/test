package com.spring_demo.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.spring_demo.entities.CategorieEntity;

public interface CategorieRepository extends PagingAndSortingRepository<CategorieEntity, Long> {
	
	
	@Query(value="SELECT * FROM categories WHERE categories.categ_name =:name LIMIT 1",nativeQuery=true)
	CategorieEntity findByName(@Param("name") String name) ;
	
	@Query(value="SELECT * FROM categories WHERE categories.categ_name =:name LIMIT 1",nativeQuery=true)
	CategorieEntity findSByName(@Param("name") String name) ;

	CategorieEntity save(CategorieEntity categorieEntity);
	
	@Query(value="SELECT * FROM  categories WHERE categories.categ_id=:id LIMIT 1 " , nativeQuery=true)
	CategorieEntity findById(@Param("id") String id ) ;
	
	@Query(value="SELECT * FROM categories" , countQuery="SELECT COUNT(*) FROM categories", nativeQuery=true)
	Page<CategorieEntity> getAll(Pageable pageableRequest) ;
	
	@Query(value="SELECT * FROM categories WHERE categories.categ_name LIKE %:seach% ", countQuery="SELECT COUNT(*) FROM categories", nativeQuery=true)  
	Page<CategorieEntity> getAllByCriteria(Pageable pageableRequest , @Param("seach") String seach) ;
	

	void delete(CategorieEntity categorieEntity);
	
	
	
	@Query(value="SELECT *  FROM categories GROUP BY categories.categ_id    " , nativeQuery=true)
	List<CategorieEntity> getCategoriesNames() ;
	

}
