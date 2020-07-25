package com.webdev.app.service;
import java.util.List;

import com.webdev.app.entity.Sport;

public interface SportService {
    Sport getSportById(long Id);
    void saveSport(Sport sport);
    List<Sport> getAllSports();
    void deleteSport(Long Id);
}
