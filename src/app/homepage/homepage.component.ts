import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service"

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(public authService: AuthService) {

  }

  ngOnInit(): void {
    // this.authService.getUser()
    console.log(this.authService);
    console.log(this.authService.userData)

  }

}
