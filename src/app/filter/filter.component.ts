import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SearchResultsComponent } from '../search-results/search-results.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() cleanCate: any;
  @Output() category = new EventEmitter();
  categoryToDisplay: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  handleChange(event) {
    this.category.emit(event.target.value)
  }

  handleInputs() {
    // const allCategory = Array.from(event.target.children)
    // this.categoryToDisplay = [];
    // allCategory.forEach((category: any) => {
    //   if (!this.categoryToDisplay.includes(category.value) && category.value !== "")
    //     this.categoryToDisplay.push(category.value)
    // })

  }



}


