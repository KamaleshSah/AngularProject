import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherComponent } from './teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassReportComponent } from './class-report/class-report.component';
import { MarksEntryComponent } from './marks-entry/marks-entry.component';


const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"class-report",component:ClassReportComponent},
  {path:"marks-entry",component:MarksEntryComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
