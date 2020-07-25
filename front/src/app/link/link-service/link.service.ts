


import {Http, Response} from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Link} from "../link-model/link.model";
import {EventEmitter, Injectable} from "@angular/core";


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable()
  export class LinkService {
  
    constructor(private http:HttpClient) {}
    onLinkAdded = new EventEmitter<Link>();

   
  
    public getLinks() {
      return this.http.get<Link[]>("/api/link/getAllLinks");
    }

    public getLink(id) {
      return this.http.get<Link>("/api/link/getLink/"+id);
    }
  
    public deleteLink(id) {
      return this.http.delete("/api/link/deleteLink/"+ id);
    }
  
    public addLink(link) {
      return this.http.post("/api/link/saveLink", link);
    }
    
  
  }
  