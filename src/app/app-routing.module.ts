
import {  NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroFormComponent } from "./hero-form/hero-form.component";
import { NameEditorComponent } from "./name-editor/name-editor.component";
import { ProfileEditorComponent } from "./profile-editor/profile-editor.component";
const routes: Routes = [
  {path:'heroes', component:HeroesComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'', redirectTo:'/dashboard',pathMatch:'full'},
  {path:'detail/:id', component:HeroDetailComponent},
  {path:'heroes-form', component:HeroFormComponent},
  {path:"name-editor", component:NameEditorComponent},
  {path:"profile-editor", component:ProfileEditorComponent}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports :[RouterModule]
})

export class AppRoutingModule {}


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
