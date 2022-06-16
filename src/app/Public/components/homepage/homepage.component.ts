import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  navigateList = ['About Us','Contact us','Be a Founder'];
  constructor() { }

  ngOnInit(): void {

  }

}
