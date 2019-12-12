import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ValidateService } from "./services/validate.service";
import { FlashMessagesModule } from "angular2-flash-messages";
import { FlashMessagesService } from "angular2-flash-messages";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./services/auth.service";
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuard } from "./guards/auth.guard";
import { BoardService } from "./services/board.service";
import { ReboardService } from "./services/reboard.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { GyosuComponent } from "./components/gyosu/gyosu.component";
import { CalComponent } from "./components/cal/cal.component";
import { Cal2Component } from "./components/cal2/cal2.component";
import { Cal3Component } from "./components/cal3/cal3.component";
import { IsComponent } from "./components/is/is.component";
import { WriteComponent } from "./components/write/write.component";
import { SendmailComponent } from "./components/sendmail/sendmail.component";
import { Ng2UploaderModule } from "ng2-uploader";
import { ViewComponent } from "./components/view/view.component";
import { Dashboard2Component } from "./components/dashboard2/dashboard2.component";
import { MessageComponent } from "./components/message/message.component";
import { NewpwComponent } from "./components/newpw/newpw.component";
import { Gyosu2Component } from "./components/gyosu2/gyosu2.component";
import { OnlygyosuComponent } from "./components/onlygyosu/onlygyosu.component";
import { WebComponent } from "./components/web/web.component";
import { JtbcComponent } from "./components/jtbc/jtbc.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    GyosuComponent,
    CalComponent,
    Cal2Component,
    Cal3Component,
    WriteComponent,
    IsComponent,
    SendmailComponent,
    ViewComponent,
    Dashboard2Component,
    MessageComponent,
    NewpwComponent,
    Gyosu2Component,
    OnlygyosuComponent,
    WebComponent,
    JtbcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlashMessagesModule,
    Ng2UploaderModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem("id_token");
        }
      }
    })
  ],
  providers: [
    ValidateService,
    AuthService,
    FlashMessagesService,
    BoardService,
    ReboardService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
