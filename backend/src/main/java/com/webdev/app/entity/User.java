package com.webdev.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator="User")
    @SequenceGenerator(name="User", sequenceName="UserSeq")


    private long id;

    private String username;

    private String password;
    
    private String email;

    public User(String username,String password,String email) {
        this.username=username;
        this.password=password;
        this.email=email;
    }

    public User() {
    }
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getusername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
