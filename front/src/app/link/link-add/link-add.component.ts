import {Component, OnInit} from "@angular/core";
import {LinkService} from "../link-service/link.service";
import {Link} from "../link-model/link.model";
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-link-add',
  templateUrl: './link-add.component.html',
  styleUrls: ['./link-add.component.css']
})
export class LinkAddComponent implements OnInit {

    
  link: Link = new Link("","","","","");
  submitted = false;
  sub: Subscription;
  constructor(private linkService: LinkService,private route: ActivatedRoute,private router: Router) {

  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.linkService.getLink(id).subscribe((link: any) => {
          if (link) {
            this.link = link;
            
          } else {
            console.log(`Link with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  newLink(): void {
    this.submitted = false;
    this.link = new Link("","","","","");
  }

  save() {
    this.linkService.addLink(this.link)
      .subscribe(data => console.log(data), error => console.log(error));
   
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }


  gotoList() {
    this.router.navigate(['/link']);
  }
    
}

