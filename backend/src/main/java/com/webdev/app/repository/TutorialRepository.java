package com.webdev.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.webdev.app.entity.Tutorial;

public interface TutorialRepository extends JpaRepository<Tutorial, Long> {

}
