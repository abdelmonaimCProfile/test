package com.spring_demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.spring_demo.services.UserService;


@EnableWebSecurity
@Configuration
@EnableMethodSecurity
public class Security {
	
	private final JwtFilter jwtAuthFilter ;
	private final UserService userService ;
	
	
	


	public Security(JwtFilter jwtAuthFilter, UserService userService) {
		super();
		this.jwtAuthFilter = jwtAuthFilter;
		this.userService = userService;
	}

	@Bean 
	public SecurityFilterChain securityFlterChain(HttpSecurity http) throws Exception {
		http
		.cors()
		.and()
		.csrf()
		.disable()
		.authorizeHttpRequests(auth -> auth.requestMatchers(HttpMethod.POST,"/users").permitAll())
		.authorizeHttpRequests(auth -> auth.requestMatchers(HttpMethod.POST,"/authentication").permitAll())
		.authorizeHttpRequests()
		.anyRequest()
		.authenticated()
		.and()
		.sessionManagement()
		.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and()
		.authenticationProvider(authenticationProvider())
		.addFilterBefore(jwtAuthFilter,UsernamePasswordAuthenticationFilter.class)
		.httpBasic();
		
		
		return http.build();
	}
	
	@Bean 
	public AuthenticationProvider authenticationProvider() {
		
		final DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
		authenticationProvider.setUserDetailsService(userDetailsService());
		authenticationProvider.setPasswordEncoder(passwordEncoder());
		return authenticationProvider ;
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return NoOpPasswordEncoder.getInstance() ;
	}
	
	@Bean 
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager() ;
	}
	
	
	@Bean
	public UserDetailsService userDetailsService() {
		
		return new UserDetailsService() {

			@Override
			public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
				
				return userService.loadUserByUsername(email) ;
			}
			
		};
	}

}
