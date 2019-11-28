import { Component, OnInit } from "@angular/core";
import { BoardService } from "src/app/services/board.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(private boardService: BoardService) {}
  users: any;
  ngOnInit() {
    this.boardService.getList().subscribe(users => {
      this.users = users;
    });
  }
}
