package com.webdev.app.service;
import java.util.List;

import com.webdev.app.entity.EducationTopic;;

public interface EducationTopicService {
    EducationTopic getEducationTopicById(long Id);
    void saveEducationTopic(EducationTopic educationTopic);
    List<EducationTopic> getAllEducationTopics();
    void deleteEducationTopic(Long Id);
}
