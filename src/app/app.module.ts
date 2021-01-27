import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from "../environments/environment"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FilterComponent } from './filter/filter.component';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavouritesComponent } from './favourites/favourites.component';

const firebaseConfig = {
  apiKey: "AIzaSyBug7xJ89eblDhGP3tjr8BOo9z8HNz2R9o",
  authDomain: "angular-book-finder.firebaseapp.com",
  projectId: "angular-book-finder",
  storageBucket: "angular-book-finder.appspot.com",
  messagingSenderId: "97467722402",
  appId: "1:97467722402:web:415ad5435aa145aa3345fb",
  measurementId: "G-4YRX5V143D"
}

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchbarComponent,
    SearchResultsComponent,
    FilterComponent,
    SearchResultItemComponent,
    SigninComponent,
    NavbarComponent,
    FavouritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
