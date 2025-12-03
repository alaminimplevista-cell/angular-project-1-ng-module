import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';


const routes: Routes = [
  // {path:"",redirectTo:"home",pathMatch:"full"},
  // {path:"home",component: HomeComponent},
  // {path:"about",component: AboutComponent},
  {path:"",loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent)},
  {path:"about",loadComponent:()=>import('./about/about.component').then(m=>m.AboutComponent)},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy:PreloadAllModules
    }

  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
