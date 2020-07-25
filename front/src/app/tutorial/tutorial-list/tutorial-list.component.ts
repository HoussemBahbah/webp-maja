import {Component, OnInit} from "@angular/core";
import {Response} from "@angular/http";

import {Tutorial} from "../tutorial-model/tutorial.model";
import {TutorialService} from "../tutorial-service/tutorial.service";

@Component({
    selector: 'app-tutorial-list',
    providers: [TutorialService],
    templateUrl: './tutorial-list.component.html',
    styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {

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

    
/*
    onTaskChange(event, tutorial) {
        this.tutorialService.addTutorial(tutorial).subscribe();
    }

    */
}
