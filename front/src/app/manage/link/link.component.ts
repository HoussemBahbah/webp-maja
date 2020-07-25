
import {Component, OnInit} from "@angular/core";
import {Response} from "@angular/http";

import { Link } from '../../link/link-model/link.model'
import {LinkService} from "../../link/link-service/link.service";

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  links: Link[] = [];

  constructor(private linkService: LinkService) {

  }

  ngOnInit() {
      // initial load of data
      this.linkService.getLinks()
          .subscribe(
              (links: any[]) => {
                  this.links = links
              },
              (error) => console.log(error)
          );
      /*
      this.linkService.onLinkAdded.subscribe(
          (link: Link) => this.links.push(link)
      );

      */
  }

  


  reloadData() {
    this.linkService.getLinks()
    .subscribe(
        (links: any[]) => {
            this.links = links
        },
        (error) => console.log(error)
    );
  }

  deleteLink(id: number) {
    this.linkService.deleteLink(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


/*
  onTaskChange(event, link) {
      this.linkService.addLink(link).subscribe();
  }

  */

}





