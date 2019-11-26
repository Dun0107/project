import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {
  title : string;
  name : string;
  content : string;

  constructor() { }

  ngOnInit() {
  }

  onWriteSubmit(){
    const board = {
      title : this.title,
      name : this.name,
      content : this.content
    }
  }

}
