import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';


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
  ) { }

  ngOnInit(): void {

  }

  handleSearch() {
    this.cate = []
    this.cleanCate = []
    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${this.searchBy}=${this.searchText}`).toPromise()
      .then((response: any) => {
        console.log(response.items);

        this.results = response.items
        this.selectedCategory = ""
        this.results.map(res => res.volumeInfo.categories ? this.cate.push(...res.volumeInfo.categories) : null)
        this.cate.forEach(cate => !this.cleanCate.includes(cate) ? this.cleanCate.push(cate) : null)
      })
  }

  handleCategoryChange(event) {
    this.selectedCategory = event
  }

}
