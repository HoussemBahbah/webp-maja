import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { EducationShowComponent } from '../education/education-show/education-show.component';
import { EducationListComponent } from '../education/education-list/education-list.component';
import { EducationAddComponent } from '../education/education-add/education-add.component';
import { EducationDeleteComponent } from '../education/education-delete/education-delete.component';
import { AppComponent } from '../app.component';
import { TutorialShowComponent } from '../tutorial/tutorial-show/tutorial-show.component';
import { TutorialListComponent } from '../tutorial/tutorial-list/tutorial-list.component';
import { TutorialAddComponent } from '../tutorial/tutorial-add/tutorial-add.component';
import { TutorialDeleteComponent } from '../tutorial/tutorial-delete/tutorial-delete.component';

import { LinkShowComponent } from '../link/link-show/link-show.component';
import { LinkListComponent } from '../link/link-list/link-list.component';
import { LinkAddComponent } from '../link/link-add/link-add.component';
import { LinkDeleteComponent } from '../link/link-delete/link-delete.component';

import { ManageComponent } from '../manage/manage/manage.component';
import { EducationComponent } from '../manage/education/education.component';
import { TutorialComponent } from '../manage/tutorial/tutorial.component';

const routes: Routes = [
  {
    path: '', redirectTo:'/home',
pathMatch: 'full' 
},


{path: 'home',component:HomeComponent },


  {path: 'education',
  component:EducationListComponent 
 },
  {path: 'education/show/:id',component:EducationShowComponent},
  {path: 'education/list',component:EducationListComponent},
  {path: 'education/add',component:EducationAddComponent},
  {path: 'education/edit/:id',component:EducationAddComponent},
  {path: 'education/delete/:id',component:EducationDeleteComponent},


  {path: 'tutorial',
  component:TutorialListComponent 
 },
  {path: 'tutorial/show/:id',component:TutorialShowComponent},
  {path: 'tutorial/list',component:TutorialListComponent},
  {path: 'tutorial/add',component:TutorialAddComponent},
  {path: 'tutorial/edit/:id',component:TutorialAddComponent},
  {path: 'tutorial/delete/:id',component:TutorialDeleteComponent},


  {path: 'link',
  component:LinkListComponent 
 },
  {path: 'link/show/:id',component:LinkShowComponent},
  {path: 'link/list',component:LinkListComponent},
  {path: 'link/add',component:LinkAddComponent},
  {path: 'link/edit/:id',component:LinkAddComponent},
  {path: 'link/delete/:id',component:LinkDeleteComponent},


  {
    path: 'manage', redirectTo:'/manage/education',
pathMatch: 'full' 
},
  {path: 'manage',
  component:ManageComponent ,
  children: [
    {
      path: 'education',
      component: EducationComponent,
    },
    {
      path: 'tutorial',
      component: TutorialComponent,
    }
  ]
 },



];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})



export class RoutingModule { }



