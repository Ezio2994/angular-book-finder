import { Injectable, NgZone } from '@angular/core';
import { CrudOperationsService } from "./crud-operations.service"
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userData: any;

  constructor(
    public afAuth: AngularFireAuth,
    public CrudOperationsService: CrudOperationsService,
    public router: Router,
    private _ngZone: NgZone,
  ) {
    this.getUser()
  }

  GoogleAuth() {
    this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  AuthLogin(provider) {
    firebase.auth().signInWithPopup(provider)
      .then(() => {
        console.log('You have been successfully logged in!')
        this._ngZone.run(() => this.router.navigate(['search']));
      }).catch((error) => {
        console.log(error)
      })
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      console.log("Logged out");
      this._ngZone.run(() => this.router.navigate(['/']));
    }).catch((error) => {
      console.log(error)
    })
  }

  getUser() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        // localStorage.setItem('user', JSON.stringify(this.userData));
        // JSON.parse(localStorage.getItem('user'));
        this.CrudOperationsService.fetchFav(user.uid)

      } else {
        this.userData = null;
        // localStorage.setItem('user', null);
        // JSON.parse(localStorage.getItem('user'));
      }
    })
  }
}