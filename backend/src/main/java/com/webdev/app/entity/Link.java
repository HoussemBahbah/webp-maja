package com.webdev.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Link {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator="Link")
    @SequenceGenerator(name="Link", sequenceName="LinkSeq")


    private long id;

    private String name;

    private String link;
    
    private String date;

    private String description;

    public Link(String name,String link,String date,String description) {
        this.name=name;
        this.link=link;
        this.date=date;
        this.description=description;
    }

    public Link() {
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


    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
