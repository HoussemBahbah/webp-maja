
package com.webdev.app.implementation;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webdev.app.service.TutorialService;
import com.webdev.app.entity.Tutorial;
import com.webdev.app.repository.TutorialRepository;

@Service
public class TutorialServiceImp implements TutorialService {
	@Autowired
	TutorialRepository tutorialRepository;

	@Override
	public Tutorial getTutorialById(long Id) {
		return tutorialRepository.findById(Id).get();
	}

	@Override
	public void saveTutorial(Tutorial tutorial) {
		tutorialRepository.save(tutorial);
	}

	@Override
	public List<Tutorial> getAllTutorials() {
		return tutorialRepository.findAll();
	}

	
	@Override
	public void deleteTutorial(Long Id) {
		 tutorialRepository.deleteById(Id);
	}
}
