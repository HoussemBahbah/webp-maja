import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { EducationListComponent } from './education/education-list/education-list.component';
import { EducationAddComponent } from './education/education-add/education-add.component';
import { EducationShowComponent } from './education/education-show/education-show.component';
import { EducationDeleteComponent } from './education/education-delete/education-delete.component';
import { EducationService } from './education/education-service/education.service';
import { HomeComponent } from './home/home.component';
import { TutorialListComponent } from './tutorial/tutorial-list/tutorial-list.component';
import { TutorialAddComponent } from './tutorial/tutorial-add/tutorial-add.component';
import { TutorialShowComponent } from './tutorial/tutorial-show/tutorial-show.component';
import { TutorialDeleteComponent } from './tutorial/tutorial-delete/tutorial-delete.component';
import { TutorialService } from './tutorial/tutorial-service/tutorial.service';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { LinkAddComponent } from './link/link-add/link-add.component';
import { LinkListComponent } from './link/link-list/link-list.component';
import { LinkDeleteComponent } from './link/link-delete/link-delete.component';
import { LinkShowComponent } from './link/link-show/link-show.component';
import { LinkService } from './link/link-service/link.service';
import { ManageComponent } from './manage/manage/manage.component';
import { EducationComponent } from './manage/education/education.component';
import { TutorialComponent } from './manage/tutorial/tutorial.component';
import { LinkComponent } from './manage/link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationListComponent,
    EducationAddComponent,
    EducationShowComponent,
    EducationDeleteComponent,
    TutorialListComponent,
    TutorialAddComponent,
    TutorialShowComponent,
    TutorialDeleteComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    LinkAddComponent,
    LinkListComponent,
    LinkDeleteComponent,
    LinkShowComponent,
    ManageComponent,
    EducationComponent,
    TutorialComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [EducationService,TutorialService,LinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
