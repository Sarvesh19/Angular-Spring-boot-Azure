package com.devops;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
@CrossOrigin(origins = "*")
public class DevopsController {

	@GetMapping("data")
	Map<String, String> getMap(){
		Map<String, String> ma = new HashMap<>();
		ma.put("test", "Sarvesh");
		
		return ma;
		
	}
	
	

}
