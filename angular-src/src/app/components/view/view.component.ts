import { Component, OnInit } from "@angular/core";
import { ValidateService } from "../../services/validate.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { ReboardService } from "../../services/reboard.service";
import { BoardService } from "../../services/board.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewComponent implements OnInit {
  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private ReboardService: ReboardService,
    private router: Router,
    private boardService: BoardService
  ) {}

  writes: any;

  name: string;
  content: string;
  ngOnInit() {
    this.boardService.getList().subscribe(writes => {
      this.writes = writes;
    });
  }

  onViewSubmit() {
    const view = {
      name: this.name,
      content: this.content
    };

    if (!this.validateService.validateView(view)) {
      this.flashMessage.show("모든 필드들을 채워주세요", {
        cssClass: "alert-danger",
        timeout: 3000
      });
      return false;
    }

    this.ReboardService.viewUser(view).subscribe(data => {
      if (data.success) {
        this.flashMessage.show("댓글이 등록되었습니다.", {
          cssClass: "alert-success",
          timeout: 3000
        });
        this.router.navigate(["./view"]);
      } else {
        this.flashMessage.show("댓글 등록에 실패했습니다.", {
          cssClass: "alert-danger",
          timeout: 3000
        });
        this.router.navigate(["./view"]);
      }
    });
  }
}
