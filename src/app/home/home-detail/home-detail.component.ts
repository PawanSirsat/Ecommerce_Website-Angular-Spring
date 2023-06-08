import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  @Input() product : any
  
  constructor() { }

  ngOnInit(): void {
  }

}
