package com.spring_demo.config;

import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.spring_demo.services.UserService;
import com.spring_demo.utils.JwtUtils;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtFilter extends OncePerRequestFilter {
	
	private final UserService userDetailsService ;
	private final JwtUtils jwtUtils ;
	
	

	public JwtFilter(UserService userDetailsService, JwtUtils jwtUtils) {
		super();
		this.userDetailsService = userDetailsService;
		this.jwtUtils = jwtUtils;
	}



	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		
		final String authHeader = request.getHeader("AUTHORIZATION") ;
		final String userEmail ;
		final String jwtToken ;
		
		
		if(authHeader == null || !authHeader.startsWith("Bearer")) {
			 filterChain.doFilter(request, response);
			 return ;
		}
		
		jwtToken = authHeader.substring(7) ;
		userEmail = jwtUtils.extractUsername(jwtToken) ;
		if(userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null  ) {
			 UserDetails userDetails = userDetailsService.loadUserByUsername(userEmail); ;
			
			 if(jwtUtils.validateToken(jwtToken, userDetails)) {
				 UsernamePasswordAuthenticationToken authToken =
						 new UsernamePasswordAuthenticationToken(userDetails,null, userDetails.getAuthorities()) ;
				 authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				 SecurityContextHolder.getContext().setAuthentication(authToken);
			 }
		}
		filterChain.doFilter(request, response);
	}

}
