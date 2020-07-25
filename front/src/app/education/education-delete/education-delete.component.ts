import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {EducationService} from "../education-service/education.service";
@Component({
  selector: 'app-education-delete',
  templateUrl: './education-delete.component.html',
  styleUrls: ['./education-delete.component.css']
})
export class EducationDeleteComponent implements OnInit {

  constructor(private educationService: EducationService,private route: ActivatedRoute,private router: Router) {

  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.educationService.deleteEducation(id)
    .subscribe(
      data => {
        console.log(data);
        
      },
      error => console.log(error));
      alert("deleted successfully");
      this.router.navigate(['/education']);
}
    
  

  
   


}
