import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TutorialService} from "../tutorial-service/tutorial.service";
@Component({
  selector: 'app-tutorial-delete',
  templateUrl: './tutorial-delete.component.html',
  styleUrls: ['./tutorial-delete.component.css']
})
export class TutorialDeleteComponent implements OnInit {

  constructor(private tutorialService: TutorialService,private route: ActivatedRoute,private router: Router) {

  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tutorialService.deleteTutorial(id)
    .subscribe(
      data => {
        console.log(data);
        
      },
      error => console.log(error));
      alert("deleted successfully");
      this.router.navigate(['/tutorial']);
}
    
  

  
   


}
