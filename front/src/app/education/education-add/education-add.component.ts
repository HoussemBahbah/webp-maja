import {Component, OnInit} from "@angular/core";
import {EducationService} from "../education-service/education.service";
import {Education} from "../education-model/education.model";
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.css']
})
export class EducationAddComponent implements OnInit {

    
  education: Education = new Education("","","","","");
  submitted = false;
  sub: Subscription;
  constructor(private educationService: EducationService,private route: ActivatedRoute,private router: Router) {

  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.educationService.getEducation(id).subscribe((education: any) => {
          if (education) {
            this.education = education;
            
          } else {
            console.log(`Education with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  newEducation(): void {
    this.submitted = false;
    this.education = new Education("","","","","");
  }

  save() {
    this.educationService.addEducation(this.education)
      .subscribe(data => console.log(data), error => console.log(error));
   
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }


  gotoList() {
    this.router.navigate(['/education']);
  }
    
}

