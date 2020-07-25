import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Router,  Event, NavigationStart,NavigationEnd/*, RoutesRecognized,
RouteConfigLoadStart, RouteConfigLoadEnd*/} from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
 
  currentlink :string;
  forward =0;
  ngOnInit() {
    this.forward =-1;
    this.currentlink= this.router.url;
  }

  constructor(private router: Router,private _location : Location) {
    router.events.subscribe( (event: Event) => 
        {if (event instanceof NavigationStart) {
          this.currentlink= this.router.url;
          
        }
        else if (event instanceof NavigationEnd) {
          this.currentlink= this.router.url.trim();
          
        }
        /*
        else if (event instanceof RoutesRecognized) { 
        this.currentlink= this.router.url.substr(8);
        }
        else if (event instanceof RouteConfigLoadStart) {
          this.currentlink= this.router.url.substr(8);
        }
        else if (event instanceof RouteConfigLoadEnd) { 
          this.currentlink= this.router.url.substr(8);
        
        */
    });
    
  }

  backClicked() {
    this._location.back();
    this.forward++;
  } 

  forwardClicked() {
    this._location.forward();
    this.forward--;
  } 
}



