package com.webdev.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.webdev.app.entity.ScienceTopic;;

public interface ScienceTopicRepository extends JpaRepository<ScienceTopic, Long> {

}
