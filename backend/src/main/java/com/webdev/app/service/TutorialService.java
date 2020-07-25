package com.webdev.app.service;
import java.util.List;

import com.webdev.app.entity.Tutorial;

public interface TutorialService {
    Tutorial getTutorialById(long Id);
    void saveTutorial(Tutorial tutorial);
    List<Tutorial> getAllTutorials();
    void deleteTutorial(Long Id);
}
