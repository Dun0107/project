import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

@Component({
  selector: "app-newpw",
  templateUrl: "./newpw.component.html",
  styleUrls: ["./newpw.component.scss"]
})
export class NewpwComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  age: Int16Array;
  password: string;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.getProfile().subscribe(
      profile => {
        this.username = profile.user.username;
        this.name = profile.user.name;
        this.age = profile.user.age;
        this.email = profile.user.email;
        this.password = profile.user.password;
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
  onNewpwSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      age: this.age,
      password: this.password,
      username: this.username
    }; // Required Fields

    // if (!this.validateService.validateRegister(user)) {
    //   this.flashMessage.show("모든 필드들을 채워주세요", {
    //     cssClass: "alert-danger",
    //     timeout: 3000
    //   });
    //   return false;
    // } // Validate Email
    // if (!this.validateService.validateEmail(user.email)) {
    //   this.flashMessage.show("유효한 이메일주소를 입력하세요", {
    //     cssClass: "alert-danger",
    //     timeout: 3000
    //   });
    //   return false;
    // }

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show("개인정보 수정 성공! 로그아웃 후 다시 로그인해주세요.", {
          cssClass: "alert-success",
          timeout: 3000
        });
        this.router.navigate(["/login"]);
      } else {
        this.flashMessage.show("잘못 입력된 항목이 있습니다. 확인해주세요.", {
          cssClass: "alert-danger",
          timeout: 3000
        });
        this.router.navigate(["/newpw"]);
      }
    });
  }
}
