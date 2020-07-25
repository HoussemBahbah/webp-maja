package com.webdev.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webdev.app.entity.ScienceTopic;
import com.webdev.app.service.ScienceTopicService;


@RequestMapping(path="/api/scienceTopic")
@RestController
public class ScienceTopicController {
    

    @Autowired
	ScienceTopicService scienceTopicService;

	@RequestMapping("/getScienceTopic/{Id}")
	public ScienceTopic getScienceTopicById(@PathVariable Long Id) {
		return scienceTopicService.getScienceTopicById(Id);
	}
	
	@RequestMapping("/getAllScienceTopics")
	public List<ScienceTopic> getAllScienceTopics() {
		return scienceTopicService.getAllScienceTopics();
	}
	
	@RequestMapping(value= "/saveScienceTopic", method= RequestMethod.POST)
	public void saveScienceTopic(@RequestBody ScienceTopic scienceTopic) {
		scienceTopicService.saveScienceTopic(scienceTopic);
	}


	@RequestMapping(value= "/deleteScienceTopic/{Id}", method= RequestMethod.DELETE)
	public void ScienceTopic(@PathVariable Long Id) {
		scienceTopicService.deleteScienceTopic(Id);
	}
}
