import { Component, OnInit } from '@angular/core';
import {Router,  Event, NavigationStart,NavigationEnd/*, RoutesRecognized,
  RouteConfigLoadStart, RouteConfigLoadEnd*/} from '@angular/router';   


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  

  currentlink :string;
 
  ngOnInit() {

    this.currentlink= this.router.url.substr(8);
  }

  constructor(private router: Router) {
    router.events.subscribe( (event: Event) => 
        {if (event instanceof NavigationStart) {
          this.currentlink= this.router.url.substr(8);
        }
        else if (event instanceof NavigationEnd) {
          this.currentlink= this.router.url.substr(8);
            
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


}
