import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-gyosu2',
  templateUrl: './gyosu2.component.html',
  styleUrls: ['./gyosu2.component.scss']
})
export class Gyosu2Component implements OnInit {
  password: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
    ) { }

  ngOnInit() {}

  onCheckSubmit(){
        const check = {
          password: this.password
        }
    
    this.authService.checkUser(check).subscribe(data => {
        if(data.success) {
          this.flashMessage.show('교수님 인증되었습니다.', 
            {cssClass: 'alert-success', timeout: 5000});
          this.router.navigate(['onlygyosu']);
        } else {
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          this.router.navigate(['gyosu2']);
        }
      });

}
}