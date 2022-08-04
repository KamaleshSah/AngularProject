import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassReportComponent } from './class-report/class-report.component';
import { MarksEntryComponent } from './marks-entry/marks-entry.component';


@NgModule({
  declarations: [
    TeacherComponent,
    DashboardComponent,
    ClassReportComponent,
    MarksEntryComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
