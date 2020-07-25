
import {Component, OnInit} from "@angular/core";
import {Response} from "@angular/http";

import { Education } from '../../education/education-model/education.model'
import {EducationService} from "../../education/education-service/education.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: Education[] = [];

  constructor(private educationService: EducationService) {

  }

  ngOnInit() {
      // initial load of data
      this.educationService.getEducations()
          .subscribe(
              (educations: any[]) => {
                  this.educations = educations
              },
              (error) => console.log(error)
          );
      /*
      this.educationService.onEducationAdded.subscribe(
          (education: Education) => this.educations.push(education)
      );

      */
  }

  


  reloadData() {
    this.educationService.getEducations()
    .subscribe(
        (educations: any[]) => {
            this.educations = educations
        },
        (error) => console.log(error)
    );
  }

  deleteEducation(id: number) {
    this.educationService.deleteEducation(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


/*
  onTaskChange(event, education) {
      this.educationService.addEducation(education).subscribe();
  }

  */

}





