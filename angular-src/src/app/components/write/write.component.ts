import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BoardService } from '../../services/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {
  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private BoardService: BoardService,
    private router: Router
    ) { }

    title : string;
    name : string;
    content : string; 
  ngOnInit() {
  }

  onWriteSubmit(){
    const write = {
      title : this.title,
      name : this.name,
      content : this.content
    }

      // Required Fields
    if(!this.validateService.validateWrite(write)){
    this.flashMessage.show('모든 필드들을 채워주세요', {cssClass: 'alert-danger', timeout: 3000});
    return false;
    }

    this.BoardService.writeUser(write).subscribe(data => {
      if(data.success)
     {
        this.flashMessage.show("글이 저장되었습니다.",{cssClass:'alert-success', timeout: 3000});
        this.router.navigate(['./dashboard']);
      }
      else
      {
        this.flashMessage.show('글 저장에 실패했습니다.',{cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['./dashboard']);
      }
    });
  }
}

