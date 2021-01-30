import { Component, Input, OnInit } from '@angular/core';
import { CrudOperationsService } from "../crud-operations.service"
import { AuthService } from "../auth.service"

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {

  @Input() result: any;
  @Input() selectedCategory: any


  constructor(
    public CrudOperationsService: CrudOperationsService,
    public authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

}
