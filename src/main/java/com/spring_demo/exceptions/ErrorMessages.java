package com.spring_demo.exceptions;

import java.util.Date;

public class ErrorMessages {
	
	private Date timestamp ;
	private String message ;
	public Date getTimestamp() {
		return timestamp;
	}
	
	
	public ErrorMessages(Date timestamp, String message) {
		
		this.timestamp = timestamp;
		this.message = message;
	}


	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
	
	
	
	

}