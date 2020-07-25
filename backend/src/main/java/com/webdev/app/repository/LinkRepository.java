package com.webdev.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.webdev.app.entity.Link;

public interface LinkRepository extends JpaRepository<Link, Long> {

}
