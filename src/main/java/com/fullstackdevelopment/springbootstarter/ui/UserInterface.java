package com.fullstackdevelopment.springbootstarter.ui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserInterface {

	@RequestMapping(value = "/")
	public String homePage() {
		return "index";
	}
}
