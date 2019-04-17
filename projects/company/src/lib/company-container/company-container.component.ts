import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-container',
  templateUrl: './company-container.component.html',
  styleUrls: ['./company-container.component.css']
})
export class CompanyContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  flipped = false;
  flipIt() {
    this.flipped = !this.flipped;
  }
}