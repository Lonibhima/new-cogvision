import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { IndustrialInspectionComponent } from './components/industrial-inspection/industrial-inspection.component';
import { SafetyAndSecurityComponent } from './components/safety-and-security/safety-and-security.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
const routes: Routes = [{
  path:'',
  // component: HomeComponent
  children: [{
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'industrial-inspection',
    component: IndustrialInspectionComponent
  },
  {
    path: 'safety-and-security',
    component: SafetyAndSecurityComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
