import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  searchText: string
  results: any;
  selectedCategory: any;
  cate: string[] = [];
  cleanCate: string[] = [];


  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  @ViewChild(FilterComponent) child: FilterComponent;


  handleSearch() {

    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor=${this.searchText}`).toPromise()
      .then((response: any) => {
        this.results = response.items
        this.selectedCategory = ""
        this.child.handleInputs();
        this.results.map(res => res.volumeInfo.categories ? this.cate.push(...res.volumeInfo.categories) : null)
        this.cate.forEach(cate => !this.cleanCate.includes(cate) ? this.cleanCate.push(cate) : null)
      })
  }

  handleCategoryChange(event) {
    this.selectedCategory = event
  }
}
