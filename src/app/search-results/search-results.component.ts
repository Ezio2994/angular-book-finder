import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterComponent } from '../filter/filter.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavbarComponent } from "../navbar/navbar.component"


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  searchText: string
  searchBy: string = "intitle"
  results: any;
  selectedCategory: any;
  cate: string[] = [];
  cleanCate: string[] = [];

  constructor(
    private http: HttpClient,
    public firestore: AngularFirestore

  ) {

  }

  ngOnInit(): void {

  }

  @ViewChild(FilterComponent) child: FilterComponent;


  handleSearch() {
    this.cate = []
    this.cleanCate = []
    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${this.searchBy}=${this.searchText}`).toPromise()
      .then((response: any) => {
        this.results = response.items
        console.log(this.results);
        console.log(this.results)
        this.selectedCategory = ""
        this.child.handleInputs();
        this.results.map(res => res.volumeInfo.categories ? this.cate.push(...res.volumeInfo.categories) : null)
        this.cate.forEach(cate => !this.cleanCate.includes(cate) ? this.cleanCate.push(cate) : null)
      })
  }

  // prova() {
  //   this.http.get(`https://www.googleapis.com/books/v1/volumes/AQtaQe4-qmwC`).toPromise()
  //     .then((response: any) => {

  //       console.log(response)
  //     })
  // }

  handleCategoryChange(event) {
    this.selectedCategory = event
  }

}
