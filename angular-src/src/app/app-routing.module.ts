import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { GyosuComponent } from "./components/gyosu/gyosu.component";
import { OnlygyosuComponent } from "./components/onlygyosu/onlygyosu.component";
import { Gyosu2Component } from "./components/gyosu2/gyosu2.component";
import { CalComponent } from "./components/cal/cal.component";
import { Cal2Component } from "./components/cal2/cal2.component";
import { Cal3Component } from "./components/cal3/cal3.component";
import { IsComponent } from "./components/is/is.component";
import { WriteComponent } from "./components/write/write.component";
import { SendmailComponent } from "./components/sendmail/sendmail.component";
import { AuthGuard } from "./guards/auth.guard";
import { ViewComponent } from "./components/view/view.component";
import { WebComponent } from "./components/web/web.component";
import { MessageComponent } from "./components/message/message.component";
import { Dashboard2Component } from "./components/dashboard2/dashboard2.component";
import { NewpwComponent } from "./components/newpw/newpw.component";
import { JtbcComponent } from "./components/jtbc/jtbc.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "profile", component: ProfileComponent },
  { path: "gyosu", component: GyosuComponent },
  { path: "gyosu2", component: Gyosu2Component },
  { path: "onlygyosu", component: OnlygyosuComponent },
  { path: "cal", component: CalComponent },
  { path: "cal2", component: Cal2Component },
  { path: "cal3", component: Cal3Component },
  { path: "is", component: IsComponent },
  { path: "write", component: WriteComponent },
  { path: "sendmail", component: SendmailComponent },
  { path: "view", component: ViewComponent },
  { path: "web", component: WebComponent },
  { path: "jtbc", component: JtbcComponent },
  { path: "message", component: MessageComponent },
  {
    path: "dashboard2",
    component: Dashboard2Component,
    canActivate: [AuthGuard]
  },
  { path: "newpw", component: NewpwComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
