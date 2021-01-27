import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FavouritesComponent } from "./favourites/favourites.component"

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "search",
    component: SearchResultsComponent
  },
  {
    path: "favourites",
    component: FavouritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
