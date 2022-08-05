import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { UserReportComponent } from './user-report/user-report.component';
import { ExamReportComponent } from './exam-report/exam-report.component';
//import { HeaderComponent } from './component/header/header.component';
//import { FooterComponent } from './component/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    UserReportComponent,
    ExamReportComponent,
   // HeaderComponent,
   // FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
