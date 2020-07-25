package com.webdev.app.service;
import java.util.List;

import com.webdev.app.entity.Link;

public interface LinkService {
    Link getLinkById(long Id);
    void saveLink(Link link);
    List<Link> getAllLinks();
    void deleteLink(Long Id);
}
