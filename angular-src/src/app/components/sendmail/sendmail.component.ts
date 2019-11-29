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
  username: string;
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
          username: this.username,
          email: this.email
        }
    
    
     console.log(login.name, login.email);
     this.authService.sendEmail(login).subscribe(data => {
       let msg = data['message']
       alert(msg);
     }, error =>{
        console.log(error,"error");
     });
      
     }
}
