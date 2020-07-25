
package com.webdev.app.implementation;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webdev.app.service.EducationTopicService;
import com.webdev.app.entity.EducationTopic;
import com.webdev.app.repository.EducationTopicRepository;;

@Service
public class EducationTopicServiceImp implements EducationTopicService {
	@Autowired
	EducationTopicRepository educationTopicRepository;

	@Override
	public EducationTopic getEducationTopicById(long Id) {
		return educationTopicRepository.findById(Id).get();
	}

	@Override
	public void saveEducationTopic(EducationTopic educationTopic) {
		educationTopicRepository.save(educationTopic);
	}

	@Override
	public List<EducationTopic> getAllEducationTopics() {
		return educationTopicRepository.findAll();
	}


	@Override
	public void deleteEducationTopic(Long Id) {
		 educationTopicRepository.deleteById(Id);
	}
}
