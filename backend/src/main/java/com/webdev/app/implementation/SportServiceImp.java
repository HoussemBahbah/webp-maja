
package com.webdev.app.implementation;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webdev.app.service.SportService;
import com.webdev.app.entity.Sport;
import com.webdev.app.repository.SportRepository;

@Service
public class SportServiceImp implements SportService {
	@Autowired
	SportRepository sportRepository;

	@Override
	public Sport getSportById(long Id) {
		return sportRepository.findById(Id).get();
	}

	@Override
	public void saveSport(Sport sport) {
		sportRepository.save(sport);
	}

	@Override
	public List<Sport> getAllSports() {
		return sportRepository.findAll();
	}


	@Override
	public void deleteSport(Long Id) {
		 sportRepository.deleteById(Id);
	}
}
