package com.spring_demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring_demo.dto.CategorieDto;
import com.spring_demo.entities.CategorieEntity;
import com.spring_demo.requests.CategorieRequest;
import com.spring_demo.responses.CategorieNameResponse;
import com.spring_demo.responses.CategorieResponse;
import com.spring_demo.services.CategorieService;

import jakarta.validation.Valid;




@RestController
@RequestMapping("/categories")
public class CategorieController {
	
	@Autowired
	CategorieService service ;
	
	@PostMapping
     public ResponseEntity<CategorieResponse> create(  @RequestBody CategorieRequest request){
		
		ModelMapper modelMapper = new ModelMapper() ;
		CategorieDto categorieDto = modelMapper.map(request, CategorieDto.class) ;
		CategorieDto create = service.create(categorieDto);
		CategorieResponse categorieResponse = modelMapper.map(create, CategorieResponse.class) ;
		
		
	return new ResponseEntity<>(categorieResponse,HttpStatus.CREATED) ;
		
	}
	
	@PutMapping(path="/{id}")
	//@PreAuthorize("hasAuthority('SCOPE_ROLE_AUTHOR')")
	public ResponseEntity<CategorieResponse> update(@PathVariable String id ,@Valid @RequestBody CategorieRequest request ){
		
		ModelMapper modelMapper = new ModelMapper() ;
		CategorieDto categorie = modelMapper.map(request,CategorieDto.class);
		CategorieDto update = service.update(id,categorie) ;
		CategorieResponse categorieResponse = modelMapper.map(update, CategorieResponse.class) ;
		return new ResponseEntity<CategorieResponse>(categorieResponse,HttpStatus.OK) ;
		
	}
	
	@GetMapping 
	public List<CategorieResponse> getAll( 
			@RequestParam(value="page" , defaultValue="1") int page 
			,@RequestParam(value="limit" , defaultValue="6")int limit 
			,@RequestParam(value="name" , defaultValue="") String name){
		
		List<CategorieResponse>  categories = new ArrayList<>() ;
		List<CategorieDto> categorieDto = service.getAll(page,limit,name);
		
		for(CategorieDto item : categorieDto ) {
			
			CategorieResponse categorie = new CategorieResponse() ;
			ModelMapper modelMapper = new ModelMapper() ;
		    categorie = modelMapper.map(item,CategorieResponse.class) ;
			categories.add(categorie);
			
		}
		
		return categories ;
		
		
		
		
	}
	
	@DeleteMapping(path="/{id}")
	public String delete(@PathVariable String id ) {
		
		String message = service.delete(id);
		return message ;
		
		
		
	}
	
	@GetMapping("/names")
	public ResponseEntity<List<CategorieNameResponse>> getCategories(){
		List<CategorieNameResponse>  categories = new ArrayList<>() ;
		List<CategorieEntity> names = service.getCategoriesNames() ;
		for(CategorieEntity item : names ) {
			ModelMapper modelMapper = new ModelMapper() ;
			CategorieNameResponse   categorie = modelMapper.map(item,CategorieNameResponse.class) ;
			categories.add(categorie);
		}
		return new ResponseEntity<>(categories , HttpStatus.OK) ;
 	}
	
	@GetMapping("/{id}")
	public ResponseEntity<CategorieResponse> getCategById(@PathVariable String id){
		
		ModelMapper modelMapper = new ModelMapper() ;
		CategorieDto create = service.getCategById(id);
		CategorieResponse categorieResponse = modelMapper.map(create, CategorieResponse.class) ;
		
		return new ResponseEntity<>(categorieResponse , HttpStatus.OK) ;

	}

}
