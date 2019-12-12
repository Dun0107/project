import { Component, OnInit } from "@angular/core";
import { Board2Service } from "src/app/services/board2.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard2",
  templateUrl: "./dashboard2.component.html",
  styleUrls: ["./dashboard2.component.scss"]
})
export class Dashboard2Component implements OnInit {
  content: String;
  name: String;

  constructor(
    private board2Service: Board2Service,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {}
  messages: any;

  ngOnInit() {
    this.board2Service.getList3().subscribe(messages => {
      this.messages = messages;
    });
  }

  deleteMongoMessage(data) {
    console.log(data);
    const deletemessage = {
      name: data.name,
      content: data.content
    };
    this.board2Service.deleteMessage(deletemessage).subscribe(data => {
      if (data.success) {
        this.flashMessage.show("삭제 되었습니다", {
          cssClass: "alert-success",
          timeout: 3000
        });
        this.router.navigate(["/"]);
      } else {
        this.flashMessage.show("삭제 실패", {
          cssClass: "alert-danger",
          timeout: 3000
        });
        this.router.navigate(["/dashboard2"]);
      }
    });
  }
}
