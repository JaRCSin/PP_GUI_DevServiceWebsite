import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showFiller = false
  constructor(private routes: Router) { }

  ngOnInit(): void {
    this.routes.navigate(['/home']);
  }

  gotoServices() {
    this.routes.navigate(['/services-page']);
  }
  gotohome() {
    this.routes.navigate(['/home']);
  }
  

}

