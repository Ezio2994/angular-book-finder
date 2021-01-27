import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app'
import 'firebase/firestore'


@Injectable({
  providedIn: 'root'
})
export class CrudOperationsService {
  favourites: any[] = [];

  constructor(
    private firestore: AngularFirestore,
  ) {
    this.fetchFav()
  }

  fetchFav() {
    this.favourites = []

    return this.firestore.collection('users').doc("Favourites").get()
      .subscribe((doc) => {
        this.favourites.push(...Object.values(doc.data()))
        console.log(this.favourites);
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
  }

}
