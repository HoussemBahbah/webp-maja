
package com.webdev.app.implementation;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webdev.app.service.LinkService;
import com.webdev.app.entity.Link;
import com.webdev.app.repository.LinkRepository;

@Service
public class LinkServiceImp implements LinkService {
	@Autowired
	LinkRepository linkRepository;

	@Override
	public Link getLinkById(long Id) {
		return linkRepository.findById(Id).get();
	}

	@Override
	public void saveLink(Link link) {
		linkRepository.save(link);
	}

	@Override
	public List<Link> getAllLinks() {
		return linkRepository.findAll();
	}


	@Override
	public void deleteLink(Long Id) {
		 linkRepository.deleteById(Id);
	}
}
