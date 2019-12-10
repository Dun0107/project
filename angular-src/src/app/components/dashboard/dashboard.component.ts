import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private boardService: BoardService) { }
  writes: any;
  ngOnInit() {
    this.boardService.getList().subscribe(writes => {
      this.writes = writes;
    });
  }
  

}
