
package com.webdev.app.implementation;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webdev.app.service.ScienceTopicService;
import com.webdev.app.entity.ScienceTopic;
import com.webdev.app.repository.ScienceTopicRepository;;

@Service
public class ScienceTopicServiceImp implements ScienceTopicService {
	@Autowired
	ScienceTopicRepository scienceTopicRepository;

	@Override
	public ScienceTopic getScienceTopicById(long Id) {
		return scienceTopicRepository.findById(Id).get();
	}

	@Override
	public void saveScienceTopic(ScienceTopic scienceTopic) {
		scienceTopicRepository.save(scienceTopic);
	}

	@Override
	public List<ScienceTopic> getAllScienceTopics() {
		return scienceTopicRepository.findAll();
	}


	@Override
	public void deleteScienceTopic(Long Id) {
		 scienceTopicRepository.deleteById(Id);
	}
}
