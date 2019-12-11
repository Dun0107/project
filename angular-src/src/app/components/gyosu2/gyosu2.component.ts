import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gyosu2',
  templateUrl: './gyosu2.component.html',
  styleUrls: ['./gyosu2.component.scss']
})
export class Gyosu2Component implements OnInit {

  inputList: object[];

  constructor() {
    this.inputList = [];
   }

  ngOnInit() {
  }

  addInput() {
    this.inputList.push({value: ''});
  }
}
