import {Component, OnInit} from "@angular/core";
import {TutorialService} from "../tutorial-service/tutorial.service";
import {Tutorial} from "../tutorial-model/tutorial.model";
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tutorial-add',
  templateUrl: './tutorial-add.component.html',
  styleUrls: ['./tutorial-add.component.css']
})
export class TutorialAddComponent implements OnInit {

    
  tutorial: Tutorial = new Tutorial("","","","");
  submitted = false;
  sub: Subscription;
  constructor(private tutorialService: TutorialService,private route: ActivatedRoute,private router: Router) {

  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.tutorialService.getTutorial(id).subscribe((tutorial: any) => {
          if (tutorial) {
            this.tutorial = tutorial;
            
          } else {
            console.log(`Tutorial with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Tutorial("","","","");
  }

  save() {
    this.tutorialService.addTutorial(this.tutorial)
      .subscribe(data => console.log(data), error => console.log(error));
   
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }


  gotoList() {
    this.router.navigate(['/tutorial']);
  }
    
}

