package com.webdev.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webdev.app.entity.Tutorial;
import com.webdev.app.service.TutorialService;


@RequestMapping(path="/api/tutorial")
@RestController
public class TutorialController {
    

    @Autowired
	TutorialService tutorialService;

	@RequestMapping("/getTutorial/{Id}")
	public Tutorial getTutorialById(@PathVariable Long Id) {
		return tutorialService.getTutorialById(Id);
	}
	
	@RequestMapping("/getAllTutorials")
	public List<Tutorial> getAllTutorials() {
		return tutorialService.getAllTutorials();
	}
	
	@RequestMapping(value= "/saveTutorial", method= RequestMethod.POST)
	public void saveTutorial(@RequestBody Tutorial tutorial) {
		tutorialService.saveTutorial(tutorial);
	}


	@RequestMapping(value= "/deleteTutorial/{Id}", method= RequestMethod.DELETE)
	public void Tutorial(@PathVariable Long Id) {
		tutorialService.deleteTutorial(Id);
	}
}
