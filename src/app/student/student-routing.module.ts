import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MymarksComponent } from './mymarks/mymarks.component';


const routes: Routes = [
{path:"",component:HomeComponent},
{path:"myprofile",component:MyprofileComponent},
{path:"marks",component:MymarksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
