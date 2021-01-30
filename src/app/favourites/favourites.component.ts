import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudOperationsService } from "../crud-operations.service"
import { AuthService } from "../auth.service"

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  constructor(
    public CrudOperationsService: CrudOperationsService,
    public authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

}
