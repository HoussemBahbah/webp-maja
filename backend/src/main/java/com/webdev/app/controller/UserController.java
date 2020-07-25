package com.webdev.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webdev.app.entity.User;
import com.webdev.app.service.UserService;


@RequestMapping(path="/api/user")
@RestController
public class UserController {
    

    @Autowired
	UserService userService;

	@RequestMapping("/getUser/{Id}")
	public User getUserById(@PathVariable Long Id) {
		return userService.getUserById(Id);
	}
	
	@RequestMapping("/getAllUsers")
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}
	
	@RequestMapping(value= "/saveUser", method= RequestMethod.POST)
	public void saveUser(@RequestBody User user) {
		userService.saveUser(user);
	}


	@RequestMapping(value= "/deleteUser", method= RequestMethod.POST)
	public void User(@PathVariable Long Id) {
		userService.deleteUser(Id);
	}
}
