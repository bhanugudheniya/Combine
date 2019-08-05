import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseComponent } from './course/course.component';
import { EventComponent } from './event/event.component';
import { ForumsComponent } from './forums/forums.component';
import { MeanComponent } from './mean/mean.component';
import { BasicComponent } from './basic/basic.component';
import { IntermediateComponent } from './intermediate/intermediate.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { AddComponent } from './add/add.component';
import { HotsComponent } from './hots/hots.component';
import { TestComponent } from './test/test.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { ErrorComponent } from './error/error.component';
import { SidebaruserComponent } from './sidebaruser/sidebaruser.component';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { EventuserComponent } from './eventuser/eventuser.component';
import { FormedituserComponent } from './formedituser/formedituser.component';
import { ForumuserComponent } from './forumuser/forumuser.component';
import { MeanuserComponent } from './meanuser/meanuser.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectuserComponent } from './projectuser/projectuser.component';
import { ProjectdetailuserComponent } from './projectdetailuser/projectdetailuser.component';
import { ProjectdetaillistuserComponent } from './projectdetaillistuser/projectdetaillistuser.component';
import { ProjectenrolluserComponent } from './projectenrolluser/projectenrolluser.component';
import { ProjectlistuserComponent } from './projectlistuser/projectlistuser.component';
import { QueryuserComponent } from './queryuser/queryuser.component';
import { ReadmoreuserComponent } from './readmoreuser/readmoreuser.component';
import { ReportuserComponent } from './reportuser/reportuser.component';
import { ResumeuserComponent } from './resumeuser/resumeuser.component';
import { SuggestionuserComponent } from './suggestionuser/suggestionuser.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    CourseComponent,
    EventComponent,
    ForumsComponent,
    MeanComponent,
    BasicComponent,
    IntermediateComponent,
    AdvancedComponent,
    AddComponent,
    HotsComponent,
    TestComponent,
    SuggestionComponent,
    ErrorComponent,
    SidebaruserComponent,
    DashboarduserComponent,
    EventuserComponent,
    FormedituserComponent,
    ForumuserComponent,
    MeanuserComponent,
    ProfileComponent,
    ProjectuserComponent,
    ProjectdetailuserComponent,
    ProjectdetaillistuserComponent,
    ProjectenrolluserComponent,
    ProjectlistuserComponent,
    QueryuserComponent,
    ReadmoreuserComponent,
    ReportuserComponent,
    ResumeuserComponent,
    SuggestionuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
