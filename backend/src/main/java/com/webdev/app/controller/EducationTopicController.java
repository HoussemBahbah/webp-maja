package com.webdev.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webdev.app.entity.EducationTopic;
import com.webdev.app.service.EducationTopicService;


@RequestMapping(path="/api/educationTopic")
@RestController
public class EducationTopicController {
    

    @Autowired
	EducationTopicService educationTopicService;

	@RequestMapping("/getEducationTopic/{Id}")
	public EducationTopic getEducationTopicById(@PathVariable Long Id) {
		return educationTopicService.getEducationTopicById(Id);
	}
	
	@RequestMapping("/getAllEducationTopics")
	public List<EducationTopic> getAllEducationTopics() {
		return educationTopicService.getAllEducationTopics();
	}
	
	@RequestMapping(value= "/saveEducationTopic", method= RequestMethod.POST)
	public void saveEducationTopic(@RequestBody EducationTopic educationTopic) {
		educationTopicService.saveEducationTopic(educationTopic);
	}


	@RequestMapping(value= "/deleteEducationTopic/{Id}", method= RequestMethod.DELETE)
	public void EducationTopic(@PathVariable Long Id) {
		educationTopicService.deleteEducationTopic(Id);
	}
}
