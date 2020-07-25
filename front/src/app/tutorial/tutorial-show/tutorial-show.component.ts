import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import {Tutorial} from "../tutorial-model/tutorial.model";
import {TutorialService} from "../tutorial-service/tutorial.service";
@Component({
  selector: 'app-tutorial-show',
  templateUrl: './tutorial-show.component.html',
  styleUrls: ['./tutorial-show.component.css']
})
export class TutorialShowComponent implements OnInit {

  
  tutorial: Tutorial ;

    constructor(private tutorialService: TutorialService, private route: ActivatedRoute,) {

    }


    ngOnInit() {
        // initial load of data
        const id = +this.route.snapshot.paramMap.get('id');
        this.tutorialService.getTutorial(id)
            .subscribe(
                (tutorial) => {
                    this.tutorial = tutorial
                },
                (error) => console.log(error)
            );
      
    }

}
