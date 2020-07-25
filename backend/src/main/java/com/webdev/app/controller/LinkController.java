package com.webdev.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.webdev.app.entity.Link;
import com.webdev.app.service.LinkService;


@RequestMapping(path="/api/link")
@RestController
public class LinkController {
    

    @Autowired
	LinkService linkService;

	@RequestMapping("/getLink/{Id}")
	public Link getLinkById(@PathVariable Long Id) {
		return linkService.getLinkById(Id);
	}
	
	@RequestMapping("/getAllLinks")
	public List<Link> getAllLinks() {
		return linkService.getAllLinks();
	}
	
	@RequestMapping(value= "/saveLink", method= RequestMethod.POST)
	public void saveLink(@RequestBody Link link) {
		linkService.saveLink(link);
	}


	@RequestMapping(value= "/deleteLink/{Id}", method= RequestMethod.DELETE)
	public void Link(@PathVariable Long Id) {
		linkService.deleteLink(Id);
	}
}
