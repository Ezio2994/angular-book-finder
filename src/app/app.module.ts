import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FilterComponent } from './filter/filter.component';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchbarComponent,
    SearchResultsComponent,
    FilterComponent,
    SearchResultItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
