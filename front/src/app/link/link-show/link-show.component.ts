import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import {Link} from "../link-model/link.model";
import {LinkService} from "../link-service/link.service";
@Component({
  selector: 'app-link-show',
  templateUrl: './link-show.component.html',
  styleUrls: ['./link-show.component.css']
})
export class LinkShowComponent implements OnInit {

  
  link: Link ;

    constructor(private linkService: LinkService, private route: ActivatedRoute,) {

    }


    ngOnInit() {
        // initial load of data
        const id = +this.route.snapshot.paramMap.get('id');
        this.linkService.getLink(id)
            .subscribe(
                (link) => {
                    this.link = link
                },
                (error) => console.log(error)
            );
      
    }

}
