import { Component, Input, OnInit } from '@angular/core';
import { CrudOperationsService } from "../crud-operations.service"

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {

  @Input() result: any;
  @Input() selectedCategory: any


  constructor(
    public CrudOperationsService: CrudOperationsService
  ) {
  }

  ngOnInit(): void {
  }

  // addFav() {
  //   this.isFav.push(this.result.id);
  //   console.log(this.isFav);
  // }

  // removeFav() {
  //   const index = this.isFav.indexOf(this.result.id)
  //   this.isFav.splice(index, 1)
  //   console.log(this.isFav);

  // }

}
