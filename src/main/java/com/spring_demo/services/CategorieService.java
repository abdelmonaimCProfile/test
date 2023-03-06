package com.spring_demo.services;

import java.util.List;

import com.spring_demo.dto.CategorieDto;
import com.spring_demo.entities.CategorieEntity;


public interface CategorieService {
	
	CategorieDto create( CategorieDto categorie) ;
	CategorieDto update (String id , CategorieDto categorie ) ;
	String delete(String id) ;
	List<CategorieDto> getAll(int page , int limit , String name) ;
	List<CategorieEntity> getCategoriesNames();
	
	CategorieDto getCategById(String id) ;
	

}
