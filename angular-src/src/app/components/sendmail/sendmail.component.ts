import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.scss']
})
export class SendmailComponent implements OnInit {
  name: string;
  email: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
        const login = {
          name: this.name,
          email: this.email
        }
    console.log(login.name, login.email);
/*
    this.authService.authenticateUser(login).subscribe(data => {
        if(data.success) {
          this.authService.storeUserData(data.token, data.user);
          this.flashMessage.show('You are now logged in', 
            {cssClass: 'alert-success', timeout: 5000});
        } else {
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });
      */
     this.authService.sendEmail(login).subscribe(data => {
       let msg = data['message']
       alert(msg);
     }, error =>{
        console.log(error,"error");
     });
      
     }
}
