


import {Http, Response} from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Tutorial} from "../tutorial-model/tutorial.model";
import {EventEmitter, Injectable} from "@angular/core";


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable()
  export class TutorialService {
  
    constructor(private http:HttpClient) {}
    onTutorialAdded = new EventEmitter<Tutorial>();

   
  
    public getTutorials() {
      return this.http.get<Tutorial[]>("/api/tutorial/getAllTutorials");
    }

    public getTutorial(id) {
      return this.http.get<Tutorial>("/api/tutorial/getTutorial/"+id);
    }
  
    public deleteTutorial(id) {
      return this.http.delete("/api/tutorial/deleteTutorial/"+ id);
    }
  
    public addTutorial(tutorial) {
      return this.http.post("/api/tutorial/saveTutorial", tutorial);
    }
    
  
  }
  