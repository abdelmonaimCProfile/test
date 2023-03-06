package com.spring_demo.servicesImpl;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.spring_demo.dto.UserDto;
import com.spring_demo.entities.UserEntity;
import com.spring_demo.repositories.UserRepository;
import com.spring_demo.security.UserSecurity;
import com.spring_demo.services.UserService;
import com.spring_demo.utils.Utils;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository useRepository ;
	
	@Autowired
	Utils util ;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder ;

	@Override
	public UserDto getUser(String id) {
	
		UserEntity userEntity = useRepository.findById(id);
		if( userEntity == null ) throw new UsernameNotFoundException("user not found") ;
		ModelMapper modelMapper = new ModelMapper() ;
		UserDto userDto = modelMapper.map(userEntity, UserDto.class);
		
		return userDto ;
	}

	@Override
	public UserDto createUser(UserDto user) {
		
		UserEntity checkUser = useRepository.findByEmail(user.getUser_email_adresse()) ;
		if( checkUser != null ) throw new RuntimeException("user already exists !") ;
		
		UserEntity userEntity = new UserEntity() ;
		ModelMapper modelMapper = new ModelMapper() ;
		
		
      
		
		
		userEntity = modelMapper.map(user,UserEntity.class) ;
		
		
		
		userEntity.setUser_id(util.generateStringId(20));
		
					 LocalDateTime myDateObj = LocalDateTime.now();
					 DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("E, MMM dd yyyy HH:mm:ss");  
					 String formattedDate = myDateObj.format(myFormatObj);
		 
		userEntity.setUser_creation_date(formattedDate);
	    userEntity.setEncryptedPassword(bCryptPasswordEncoder.encode(user.getUser_password()));
	    
	    UserEntity newUser = useRepository.save(userEntity) ;
	    
		UserDto userDto = new UserDto() ;
		userDto = modelMapper.map(newUser , UserDto.class) ;
		
		return userDto;
		
	}

	@Override
	public UserDto updateUser(String user_id, UserDto user) {
		
		UserEntity userEntity = useRepository.findById(user_id);
        if( userEntity == null ) throw new RuntimeException("user not found") ;
        ModelMapper modelMapper = new ModelMapper() ;
        UserEntity userr = modelMapper.map(user, UserEntity.class);
        
        userEntity.setUser_first_name(userr.getUser_first_name());
        userEntity.setUser_last_name(userr.getUser_last_name());
        userEntity.setUser_birthday(userr.getUser_birthday());
        userEntity.setUser_email_adresse(userr.getUser_email_adresse());
        userEntity.setUser_password(userr.getUser_password());
        userEntity.setUser_city(userr.getUser_city()) ;
        userEntity.setUser_country(userr.getUser_country());
        userEntity.setUser_phone_number(userr.getUser_phone_number());
        userEntity.setUser_twitter(userr.getUser_twitter());
        userEntity.setUser_facebook(userr.getUser_facebook());
        userEntity.setUser_instagram(userr.getUser_instagram());
        userEntity.setUser_linkedin(userr.getUser_linkedin());
        userEntity.setUser_type(userr.getUser_type());
        
       
       
        UserEntity userU = useRepository.save(userEntity) ;
        
        UserDto userUpdate = modelMapper.map(userU, UserDto.class);
		
		return userUpdate;
	}

	@Override
	public String deleteUser(String id) {
		UserEntity userEntity = useRepository.findById(id) ;
		if( userEntity == null ) throw new RuntimeException("user not found") ;
		
		useRepository.delete(userEntity) ;
		return "the user deleted ";
	}

	@Override
	public List<UserDto> getAllUsers(int page, int limit, String seach) {
		if(page > 0) page = page - 1 ;
		List<UserDto> usersDto = new ArrayList<>() ;
		
		Pageable pageableRequest = PageRequest.of(page, limit) ;		
		Page<UserEntity> userPage ;
		
		if( seach.isEmpty()) 
		{
			userPage = useRepository.getAllUsers(pageableRequest) ;
		}
		else
		{
			userPage = useRepository.getAllUsersByCriteria(pageableRequest,seach) ;  
		}
		
		List<UserEntity> users = userPage.getContent() ;
		
		for( UserEntity user : users ) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			UserDto userDto = modelMapper.map(user,UserDto.class) ;  
			usersDto.add(userDto) ;
			
						
		}
			
		return usersDto ;
	}

	@Override
	public List<UserDto> getAllAuthors(int page, int limit, String seach) {
		if(page > 0) page = page - 1 ;
		List<UserDto> usersDto = new ArrayList<>() ;
		
		Pageable pageableRequest = PageRequest.of(page, limit) ;		
		Page<UserEntity> userPage ;
		
		if( seach.isEmpty()) 
		{
			userPage = useRepository.getAllAuthors(pageableRequest) ;
		}
		else
		{
			userPage = useRepository.getAllUsersByCriteria(pageableRequest,seach) ;  
		}
		
		List<UserEntity> users = userPage.getContent() ;
		
		for( UserEntity user : users ) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			UserDto userDto = modelMapper.map(user,UserDto.class) ;  
			usersDto.add(userDto) ;
			
						
		}
			
		return usersDto ;
		
	}

	@Override
	public List<UserDto> getAllAdmins(int page, int limit, String seach) {
		if(page > 0) page = page - 1 ;
		List<UserDto> usersDto = new ArrayList<>() ;
		
		Pageable pageableRequest = PageRequest.of(page, limit) ;		
		Page<UserEntity> userPage ;
		
		if( seach.isEmpty()) 
		{
			userPage = useRepository.getAllAdmins(pageableRequest) ;
		}
		else
		{
			userPage = useRepository.getAllUsersByCriteria(pageableRequest,seach) ;  
		}
		
		List<UserEntity> users = userPage.getContent() ;
		
		for( UserEntity user : users ) {
			
			ModelMapper modelMapper = new ModelMapper() ;
			UserDto userDto = modelMapper.map(user,UserDto.class) ;  
			usersDto.add(userDto) ;
			
						
		}
			
		return usersDto ;
	
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserEntity user = useRepository.findByEmail(username) ;
		if(user == null) throw new UsernameNotFoundException("user Not Found ") ;
		
		return  UserSecurity.build(user) ;
	}

}
