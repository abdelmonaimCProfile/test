package com.spring_demo.servicesImpl;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.spring_demo.dto.CategorieDto;
import com.spring_demo.entities.CategorieEntity;
import com.spring_demo.repositories.CategorieRepository;
import com.spring_demo.services.CategorieService;
import com.spring_demo.utils.Utils;

@Service
public class CategorieServiceImpl implements CategorieService {
	
	@Autowired
	CategorieRepository useRepository ;
	
	@Autowired
	Utils util ;

	@Override
	public CategorieDto create(CategorieDto categorie) {
		List<CategorieDto>  sousCategoriee  = categorie.getSous_categorie() ;
		CategorieEntity checkCateg = useRepository.findByName(categorie.getCateg_name()) ;
		 ModelMapper modelMapper = new ModelMapper() ;
		 CategorieEntity categorieEntity ;
		 
		 
		 if( checkCateg != null) {
			 
			 CategorieDto checkCategDto = modelMapper.map(checkCateg, CategorieDto.class) ;
				
				
				for( CategorieDto item : sousCategoriee ) {
					 
					
                    CategorieEntity itemm = useRepository.findSByName(item.getCateg_name()) ;
                   
                    
                   
    					if( itemm !=  null) throw new RuntimeException(" Categorie  already exist !") ;
    					
    					item.setParent_categ_id(checkCategDto);
    					item.setCateg_id(util.generateStringId(20));
    					checkCategDto.getSous_categorie().add(item) ;
                    
                    }
                   
					
					
				
				
				 categorieEntity = modelMapper.map(checkCategDto, CategorieEntity.class) ;
			 
		 }
		 else 
		 {
			 
			 for( int i=0 ; i< categorie.getSous_categorie().size() ; i++) {
					
					CategorieDto sousCategorie = categorie.getSous_categorie().get(i) ;
					sousCategorie.setParent_categ_id(categorie);
					sousCategorie.setCateg_id(util.generateStringId(20));
					categorie.getSous_categorie().set(i, sousCategorie) ;
				}  
				
				 categorieEntity = modelMapper.map(categorie, CategorieEntity.class) ;
				 categorieEntity.setCateg_id(util.generateStringId(20));
			 
		 }
        
			
		 
		 CategorieEntity create = useRepository.save(categorieEntity) ;
		 
		 CategorieDto categorieDto = modelMapper.map(create, CategorieDto.class) ;
		 
		 	
		return categorieDto ;
	}

	@Override
	public CategorieDto update(String id, CategorieDto categorie) {
		CategorieEntity categorieEntity = useRepository.findById(id) ;
		if( categorieEntity == null) throw new RuntimeException(" Categorie  doesn't exist !") ;
		
       categorieEntity.setCateg_name(categorie.getCateg_name());
       
	   CategorieEntity checkCateg = useRepository.findByName(categorie.getCateg_name()) ;
	   if( checkCateg !=  null) throw new RuntimeException(" Categorie  already exist !") ;
	   
       categorieEntity.setCateg_image(categorie.getCateg_image());
       categorieEntity.setCateg_descrip(categorie.getCateg_descrip());
       
	
      
		
		
		CategorieEntity update = useRepository.save(categorieEntity) ;
		
		ModelMapper modelMapper = new ModelMapper() ;
		CategorieDto categorieDto = modelMapper.map(update,CategorieDto.class) ;
		
		return categorieDto;
	}

	@Override
	public String delete(String id) {
		CategorieEntity categorieEntity = useRepository.findById(id) ;
		if( categorieEntity == null) throw new RuntimeException(" Categorie  doesn't exist !") ;
		useRepository.delete(categorieEntity) ;
		
		return "Categorie is deleted ";
	}

	@Override
	public List<CategorieDto> getAll(int page, int limit, String name) {
		if(page > 0) page = page - 1 ;
		List<CategorieDto> categories = new ArrayList<>();
		Pageable pageableRequest = PageRequest.of(page,limit);
		Page<CategorieEntity> categorieEntity ;
		
		if( name.isEmpty()) {
			
		 categorieEntity = useRepository.getAll(pageableRequest) ;

		}else
		{
	      categorieEntity = useRepository.getAllByCriteria(pageableRequest,name) ;
		}
	
		List<CategorieEntity> categoriesPage = categorieEntity.getContent() ;
	
		for( CategorieEntity item : categoriesPage ) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			CategorieDto categorie = modelMapper.map(item,CategorieDto.class) ;
			categories.add(categorie) ;
			
		}
		
		return categories;
	

	}

	@Override
	public List<CategorieEntity> getCategoriesNames() {
			
			
			List<CategorieEntity> names = useRepository.getCategoriesNames() ;
			
			return names;

		
	}

	@Override
	public CategorieDto getCategById(String id) {
		CategorieEntity categorie = useRepository.findById(id);
		ModelMapper modelMapper = new ModelMapper() ;
		
		CategorieDto categorieDto = modelMapper.map(categorie,CategorieDto.class);
		
		return categorieDto;
	}

	

}
