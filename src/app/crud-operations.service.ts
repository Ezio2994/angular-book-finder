import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from "@angular/common/http"
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
  ) {
    this.fetchFav()
  }

  fetchFav() {
    this.favourites = []
    console.log("done");


    this.firestore.collection('users').doc("Favourites").get()
      .subscribe((doc) => {
        this.favourites.push(...Object.values(doc.data()))
        console.log(this.favourites);
        this.generateFavs()
      })
  };

  addFav(result) {
    const title = result.volumeInfo.title.includes("/") ? result.volumeInfo.title.replace("/", "-") : result.volumeInfo.title

    this.firestore.collection("users").doc("Favourites").update({
      [title]: result.id
    });
    this.favourites.push(result.id)
    console.log(this.favourites);

  }

  removeFav(result) {
    const title = result.volumeInfo.title.includes("/") ? result.volumeInfo.title.replace("/", "-") : result.volumeInfo.title

    this.firestore.collection("users").doc("Favourites").update({
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
