import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import {Education} from "../education-model/education.model";
import {EducationService} from "../education-service/education.service";
@Component({
  selector: 'app-education-show',
  templateUrl: './education-show.component.html',
  styleUrls: ['./education-show.component.css']
})
export class EducationShowComponent implements OnInit {

  
  education: Education ;

    constructor(private educationService: EducationService, private route: ActivatedRoute,) {

    }


    ngOnInit() {
        // initial load of data
        const id = +this.route.snapshot.paramMap.get('id');
        this.educationService.getEducation(id)
            .subscribe(
                (education) => {
                    this.education = education
                },
                (error) => console.log(error)
            );
      
    }

}
