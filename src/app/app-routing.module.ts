import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './component/about/about.component';

const routes: Routes = [
  // {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component: HomeComponent},
  {path:"about",component: AboutComponent},
  // {path:"home",loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent)},
  // {path:"about",loadComponent:()=>import('./component/about/about.component').then(m=>m.AboutComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
