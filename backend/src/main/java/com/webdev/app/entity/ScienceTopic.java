package com.webdev.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class ScienceTopic {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO, generator="ScienceTopic")
    @SequenceGenerator(name="ScienceTopic", sequenceName="ScienceTopicSeq")

    private Long id;
    private String name;

    private String category;
    
    private String text;

    private String description;

    private String date;

    public ScienceTopic(String name,String category,String text,String description,String date) {
        this.name=name;
        this.category=category;
        this.text=text;
        this.description=description;
        this.date=date;
    }

    public ScienceTopic() {
    }
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getname() {
        return name;
    }

    public void setname(String name) {
        this.name = name;
    }

    
public String getCategory(){
    return this.category;
}

void setCategory(String category){
    this.category=category;
}


public String gettext(){
    return this.text;
}


void setText(String text){
    this.text=text;
}

public String getDescription() {
    return description;
}

public void setDescription(String description) {
    this.description = description;
}


public String getDate(){
    return this.date;
}

public void setDate(String date){
    this.date=date;
}

}
