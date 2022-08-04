import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserReportComponent } from './user-report/user-report.component';
import { ExamReportComponent } from './exam-report/exam-report.component';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  {path:"",
  component:AdminComponent,
  children:[
    {path:"",component:HomeComponent},
    {path:"user-report",component:UserReportComponent},
    {path:"exam-report",component:ExamReportComponent},
  ]
}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
