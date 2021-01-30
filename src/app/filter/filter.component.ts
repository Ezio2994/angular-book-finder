import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

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

}


