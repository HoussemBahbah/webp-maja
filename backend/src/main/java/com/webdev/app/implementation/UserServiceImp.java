
package com.webdev.app.implementation;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webdev.app.service.UserService;
import com.webdev.app.entity.User;
import com.webdev.app.repository.UserRepository;

@Service
public class UserServiceImp implements UserService {
	@Autowired
	UserRepository userRepository;

	@Override
	public User getUserById(long Id) {
		return userRepository.findById(Id).get();
	}

	@Override
	public void saveUser(User user) {
		userRepository.save(user);
	}

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}


	@Override
	public void deleteUser(Long Id) {
		 userRepository.deleteById(Id);
	}
}
