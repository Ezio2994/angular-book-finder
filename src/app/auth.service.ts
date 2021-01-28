import { Injectable, NgZone } from '@angular/core';
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
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    private _ngZone: NgZone
  ) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        // localStorage.setItem('user', JSON.stringify(this.userData));
        // JSON.parse(localStorage.getItem('user'));
        console.log(this.userData);

      } else {
        console.log("done");
        this.userData = null;
        // localStorage.setItem('user', null);
        // JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Sign in with Google
  GoogleAuth() {
    this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!')
        this._ngZone.run(() => this.router.navigate(['search']));
      }).catch((error) => {
        console.log(error)
      })
  }

  signOut() {
    firebase.auth().signOut().then((result) => {
      console.log("Logged out");
      this._ngZone.run(() => this.router.navigate(['/']));
    }).catch((error) => {
      console.log(error)
    })

  }

}