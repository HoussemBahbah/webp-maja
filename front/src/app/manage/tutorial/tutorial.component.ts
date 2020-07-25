
import {Component, OnInit} from "@angular/core";
import {Response} from "@angular/http";

import { Tutorial } from '../../tutorial/tutorial-model/tutorial.model'
import {TutorialService} from "../../tutorial/tutorial-service/tutorial.service";

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  tutorials: Tutorial[] = [];

  constructor(private tutorialService: TutorialService) {

  }

  ngOnInit() {
      // initial load of data
      this.tutorialService.getTutorials()
          .subscribe(
              (tutorials: any[]) => {
                  this.tutorials = tutorials
              },
              (error) => console.log(error)
          );
      /*
      this.tutorialService.onTutorialAdded.subscribe(
          (tutorial: Tutorial) => this.tutorials.push(tutorial)
      );

      */
  }

  


  reloadData() {
    this.tutorialService.getTutorials()
    .subscribe(
        (tutorials: any[]) => {
            this.tutorials = tutorials
        },
        (error) => console.log(error)
    );
  }

  deleteTutorial(id: number) {
    this.tutorialService.deleteTutorial(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


/*
  onTaskChange(event, tutorial) {
      this.tutorialService.addTutorial(tutorial).subscribe();
  }

  */

}





