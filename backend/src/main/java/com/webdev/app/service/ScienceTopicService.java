package com.webdev.app.service;
import java.util.List;

import com.webdev.app.entity.ScienceTopic;

public interface ScienceTopicService {
    ScienceTopic getScienceTopicById(long Id);
    void saveScienceTopic(ScienceTopic scienceTopic);
    List<ScienceTopic> getAllScienceTopics();
    void deleteScienceTopic(Long Id);
}
