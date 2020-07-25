package com.webdev.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webdev.app.entity.Sport;
import com.webdev.app.service.SportService;


@RequestMapping(path="/api/sport")
@RestController
public class SportController {
    

    @Autowired
	SportService sportService;

	@RequestMapping("/getSport/{Id}")
	public Sport getSportById(@PathVariable Long Id) {
		return sportService.getSportById(Id);
	}
	
	@RequestMapping("/getAllSports")
	public List<Sport> getAllSports() {
		return sportService.getAllSports();
	}
	
	@RequestMapping(value= "/saveSport", method= RequestMethod.POST)
	public void saveSport(@RequestBody Sport sport) {
		sportService.saveSport(sport);
	}


	@RequestMapping(value= "/deleteSport/{Id}", method= RequestMethod.DELETE)
	public void Sport(@PathVariable Long Id) {
		sportService.deleteSport(Id);
	}
}
