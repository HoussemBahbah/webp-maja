import {Component, OnInit} from "@angular/core";
import {Response} from "@angular/http";

import {Link} from "../link-model/link.model";
import {LinkService} from "../link-service/link.service";

@Component({
    selector: 'app-link-list',
    providers: [LinkService],
    templateUrl: './link-list.component.html',
    styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {

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

    
/*
    onTaskChange(event, link) {
        this.linkService.addLink(link).subscribe();
    }

    */
}
