import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {LinkService} from "../link-service/link.service";
@Component({
  selector: 'app-link-delete',
  templateUrl: './link-delete.component.html',
  styleUrls: ['./link-delete.component.css']
})
export class LinkDeleteComponent implements OnInit {

  constructor(private linkService: LinkService,private route: ActivatedRoute,private router: Router) {

  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.linkService.deleteLink(id)
    .subscribe(
      data => {
        console.log(data);
        
      },
      error => console.log(error));
      alert("deleted successfully");
      this.router.navigate(['/link']);
}
    
  

  
   


}
