package com.spring_demo.utils;

import java.security.SecureRandom;
import java.text.Normalizer;
import java.util.Random;

import org.springframework.stereotype.Component;


@Component
public class Utils {
	
	private final Random RANDOM = new SecureRandom() ;
	private final String ALPHABET = "0123456789azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN"  ;
	
	
	public String generateStringId(int length) {
		
		StringBuilder returnValue = new StringBuilder(length) ;
		
		for( int i= 0 ; i < length ; i++) {
			
			returnValue.append(ALPHABET.charAt(RANDOM.nextInt(ALPHABET.length()))) ;
			
		}
		
		return new String(returnValue) ;
		
	}
	
	public String toSlug(String regex) {
		
		String toRegex = Normalizer
                .normalize(regex, Normalizer.Form.NFD)
                .replace("\\w","") // Remove all non-word, non-space or non-dash characters
                .replace("-","") // Replace dashes with spaces
                .trim() // Trim leading/trailing whitespace (including what used to be leading/trailing dashes)
                .replace("\s", "-") // Replace whitespace (including newlines and repetitions) with single dashes
                .toLowerCase() // Lowercase the final results
 ;
		
		return toRegex ;
	}}