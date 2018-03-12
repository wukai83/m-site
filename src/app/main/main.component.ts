import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fromChild() {
    console.log('I am Child');
  }

  fromParent() {
    console.log('I am Parent');
  }
}
