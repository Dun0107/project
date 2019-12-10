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
import { IsComponent } from "./components/is/is.component";
import { WriteComponent } from "./components/write/write.component";
import { SendmailComponent } from "./components/sendmail/sendmail.component";
import { ViewComponent } from "./components/view/view.component";
import { Dashboard2Component } from './components/dashboard2/dashboard2.component';
import { MessageComponent } from './components/message/message.component';
import { NewpwComponent } from './components/newpw/newpw.component';

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
    WriteComponent,
    IsComponent,
    SendmailComponent,
    ViewComponent,
    Dashboard2Component,
    MessageComponent,
    NewpwComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlashMessagesModule,
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
