import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  }, {
    path: "movies",
    component: MoviesListComponent
  }, {
    path: "**",
    pathMatch: "full",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
