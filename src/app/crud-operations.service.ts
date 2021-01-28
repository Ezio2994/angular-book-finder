import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from "@angular/common/http"
import { AuthService } from "./auth.service"
import firebase from 'firebase/app'
import 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})

export class CrudOperationsService {
  favourites: any[] = [];
  generatedBooks: any[] = [];


  constructor(
    private firestore: AngularFirestore,
    private http: HttpClient,
    private authService: AuthService
  ) {
    console.log(this.authService.userData)
    this.authService.userData ? this.fetchFav() : setTimeout(this.fetchFav, 2000)
  }




  fetchFav() {
    this.favourites = []

    this.firestore.collection('users').doc(this.authService.userData.uid).collection("favourites").doc("list").get()
      .subscribe((doc) => {
        if (doc.data()) {
          this.favourites.push(...Object.values(doc.data()))
          console.log(this.favourites);
          this.generateFavs()
        }
      })
  };

  addFav(result) {
    const title = result.volumeInfo.title.includes("/") || result.volumeInfo.title.includes(".") ? result.volumeInfo.title.replaceAll(/[/&.]/g, "-") : result.volumeInfo.title
    console.log(title);
    console.log(result.id);


    this.firestore.collection('users').doc(this.authService.userData.uid).collection("favourites").doc("list").update({
      [title.toString()]: result.id
    });
    this.favourites.push(result.id)
    console.log(this.favourites);

  }

  removeFav(result) {
    const title = result.volumeInfo.title.includes("/") ? result.volumeInfo.title.replace("/", "-") : result.volumeInfo.title

    this.firestore.collection('users').doc(this.authService.userData.uid).collection("favourites").doc("list").update({
      [title]: firebase.firestore.FieldValue.delete()
    })
    const index = this.favourites.indexOf(result.id)
    this.favourites.splice(index, 1)
    this.generateFavs()
  }


  generateFavs() {
    this.generatedBooks = []
    this.favourites.forEach(fav => {
      this.http.get(`https://www.googleapis.com/books/v1/volumes/${fav}`).toPromise()
        .then((response: any) => {
          this.generatedBooks.push({ ...response, isFav: true })
        })
    })
  }

}
