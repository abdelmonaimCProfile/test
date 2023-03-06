package com.spring_demo.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring_demo.requests.LoginForm;
import com.spring_demo.responses.JwtResponse;
import com.spring_demo.security.UserSecurity;
import com.spring_demo.services.UserService;
import com.spring_demo.utils.JwtUtils;



@RestController
@RequestMapping("/authentication")
public class authentication {
	
	private final AuthenticationManager authenticationManager ;
	private final UserService userDetailsService ;
	private final JwtUtils jwtUtils ;
	
	
	
	


	public authentication(AuthenticationManager authenticationManager, UserService userDetailsService,
			JwtUtils jwtUtils) {
		super();
		this.authenticationManager = authenticationManager;
		this.userDetailsService = userDetailsService;
		this.jwtUtils = jwtUtils;
	}


	@PostMapping
	public ResponseEntity<?> authenticate(@RequestBody LoginForm request){
		
		
		  Authentication authentication =authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()) 
				);
		
		final UserDetails user = userDetailsService.loadUserByUsername(request.getEmail()) ;
		if( user != null) {
			 String jwt =jwtUtils.generateToken(user) ;
			 
			 UserSecurity userDetails = (UserSecurity) authentication.getPrincipal();
			 List<String> roles = userDetails.getAuthorities().stream()
		                .map(item -> item.getAuthority())
		                .collect(Collectors.toList());
			 
			 
				JwtResponse res = new JwtResponse() ;
				 res.setToken(jwt);
			        res.setId(userDetails.getId());
			        res.setUsername(userDetails.getUsername());
			        res.setRole(roles);
			        
			        return ResponseEntity.ok(res);
	
		}
		
		
		
		return ResponseEntity.status(400).body("error") ;
		
	}
	
	
	@GetMapping("/profile")
	 public UserSecurity profile() {
	        SecurityContext context = SecurityContextHolder.getContext();
	        Authentication authentication = context.getAuthentication();
	        UserSecurity userDetails = (UserSecurity) authentication.getPrincipal();
	        System.out.print("username: {}"+userDetails.getUsername());
	        return userDetails;
	    }
	
	
}


