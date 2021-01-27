import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudOperationsService } from "../crud-operations.service"

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  fromFav = true

  constructor(
    public CrudOperationsService: CrudOperationsService
  ) {
    // CrudOperationsService.fetchFav()
    console.log(CrudOperationsService);

  }

  ngOnInit(): void {
  }

}
