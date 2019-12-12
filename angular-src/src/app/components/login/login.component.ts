import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService

) { }

ngOnInit() {
}
  onLoginSubmit(){
    const login = {
      username: this.username,
      password: this.password
    }

this.authService.authenticateUser(login).subscribe(data => {
  if(data.success) {
    this.authService.storeUserData(data.token, data.user);
    this.flashMessage.show('You are now logged in', 
      {cssClass: 'alert-success', timeout: 5000});
    this.router.navigate(['dashboard']);
  } else {
    this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
    this.router.navigate(['login']);
  }
});

}
}
