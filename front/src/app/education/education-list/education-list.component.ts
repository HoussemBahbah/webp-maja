import {Component, OnInit} from "@angular/core";
import {Response} from "@angular/http";

import {Education} from "../education-model/education.model";
import {EducationService} from "../education-service/education.service";

@Component({
    selector: 'app-education-list',
    providers: [EducationService],
    templateUrl: './education-list.component.html',
    styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {

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

    
/*
    onTaskChange(event, education) {
        this.educationService.addEducation(education).subscribe();
    }

    */
}
