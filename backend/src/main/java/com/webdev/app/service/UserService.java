package com.webdev.app.service;
import java.util.List;

import com.webdev.app.entity.User;

public interface UserService {
    User getUserById(long Id);
    void saveUser(User user);
    List<User> getAllUsers();
    void deleteUser(Long Id);
}
