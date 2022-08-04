import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { UserReportComponent } from './user-report/user-report.component';
import { ExamReportComponent } from './exam-report/exam-report.component';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    UserReportComponent,
    ExamReportComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
