


import {Http, Response} from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Education} from "../education-model/education.model";
import {EventEmitter, Injectable} from "@angular/core";


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable()
  export class EducationService {
  
    constructor(private http:HttpClient) {}
    onEducationAdded = new EventEmitter<Education>();

   
  
    public getEducations() {
      return this.http.get<Education[]>("/api/educationTopic/getAllEducationTopics");
    }

    public getEducation(id) {
      return this.http.get<Education>("/api/educationTopic/getEducationTopic/"+id);
    }
  
    public deleteEducation(id) {
      return this.http.delete("/api/educationTopic/deleteEducationTopic/"+ id);
    }
  
    public addEducation(education) {
      return this.http.post("/api/educationTopic/saveEducationTopic", education);
    }
    
  
  }
  