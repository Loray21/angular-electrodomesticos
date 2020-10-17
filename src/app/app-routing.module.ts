import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplainceAboutComponent } from './applaince-about/applaince-about.component';
import { ZoutApplaincesComponent } from './zout-applainces/zout-applainces.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'appliances',
    pathMatch: "full",
  },
  {
    path: 'appliances',
    component: ZoutApplaincesComponent ,
  },
  {
    path:"about",
    component: ApplainceAboutComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
