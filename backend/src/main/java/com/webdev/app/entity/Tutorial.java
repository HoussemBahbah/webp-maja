package com.webdev.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Tutorial {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator="Tutorial")
    @SequenceGenerator(name="Tutorial", sequenceName="TutorialSeq")


    private long id;

    private String name;

    private String text;
    
    private String date;

    private String description;

    public Tutorial(String name,String text,String date,String description) {
        this.name=name;
        this.text=text;
        this.date=date;
        this.description=description;
    }

    public Tutorial() {
    }
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }


    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
