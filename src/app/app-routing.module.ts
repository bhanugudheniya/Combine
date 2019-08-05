import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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
// User
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


const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'course', component:CourseComponent},
  {path: 'event',component:EventComponent},
  {path:'forums',component:ForumsComponent},
  {path:'mean',component:MeanComponent},
  {path:'basic',component:BasicComponent},
  {path:'intermediate',component:IntermediateComponent},
  {path:'advanced',component:AdvancedComponent},
  {path:'hots',component:HotsComponent},
  {path:'add',component:AddComponent},
  {path:'test',component:TestComponent},
  {path:'suggestion', component:SuggestionComponent},
  {path:'**', component:ErrorComponent},
  {path:'sidebaruser', component:SidebaruserComponent},
  {path:'dashboarduser', component:DashboarduserComponent},
  {path:'eventuser', component:EventuserComponent},
  {path:'formedituser', component:FormedituserComponent},
  {path:'forumuser', component:ForumuserComponent},
  {path:'meanuser', component:MeanuserComponent},
  {path:'profile', component:ProfileComponent},
  {path:'projectuser', component:ProjectuserComponent},
  {path:'projectdetailuser', component:ProjectdetailuserComponent},
  {path:'projectdetaillistuser', component:ProjectdetaillistuserComponent},
  {path:'projectenrolluser', component:ProjectenrolluserComponent},
  {path:'projectlistuser', component:ProjectlistuserComponent},
  {path:'queryuser', component:QueryuserComponent},
  {path:'readmore', component:ReadmoreuserComponent},
  {path:'reportuser', component:ReportuserComponent},
  {path:'resumeuser', component:ResumeuserComponent},
  {path:'suggestionuser', component:SuggestionuserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
