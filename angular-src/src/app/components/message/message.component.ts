import { Component, OnInit } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";
import { Board2Service } from "../../services/board2.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"]
})
export class MessageComponent implements OnInit {
  constructor(
    private flashMessage: FlashMessagesService,
    private Board2Service: Board2Service,
    private router: Router
  ) {}

  name: string;
  content: string;
  ngOnInit() {}

  onMessageSubmit() {
    const message = {
      name: this.name,
      content: this.content
    };

    this.Board2Service.messageUser(message).subscribe(data => {
      if (data.success) {
        this.flashMessage.show("글이 저장되었습니다.", {
          cssClass: "alert-success",
          timeout: 3000
        });
        this.router.navigate(["./dashboard2"]);
      } else {
        this.flashMessage.show("글 저장에 실패했습니다.", {
          cssClass: "alert-danger",
          timeout: 3000
        });
        this.router.navigate(["./dashboard2"]);
      }
    });
  }
}
