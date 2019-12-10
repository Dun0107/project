import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User, Login, UserNoPW } from "../models/User";
import { JwtHelperService } from "@auth0/angular-jwt";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authToken: any;
  userNoPW: UserNoPW; // 로그인 성공시 생성되는 사용자 정보
  users: UserNoPW[];

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

  prepEndpoint(ep) {
    // 1. localhost에 포팅시
    //return 'http://localhost:3000/' + ep;

    // 2. Heroku 클라우드 서버에 포팅시
    return ep;

    // 3. isweb 서버에 포팅시
    // return 'http://isweb.joongbu.ac.kr:3000/' + ep;
  }

  registerUser(user): Observable<any> {
    const registerUrl = "http://localhost:3000/users/register";
    return this.http.post(registerUrl, user, httpOptions);
  }

  authenticateUser(login): Observable<any> {
    const loginUrl = "http://localhost:3000/users/authenticate";
    return this.http.post(loginUrl, login, httpOptions);
  }

  getProfile(): Observable<any> {
    this.authToken = localStorage.getItem("id_token");
    
    const httpOptions1 = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.authToken
      })
    };
    
    const profileUrl = "http://localhost:3000/users/profile";
    return this.http.get(profileUrl, httpOptions1);
  }

  loggedIn() {
    return !this.jwtHelper.isTokenExpired(this.authToken);
  }

  storeUserData(token, userNoPW) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(userNoPW));
    this.authToken = token;
    this.userNoPW = userNoPW;
  }

  logout() {
    this.authToken = null;
    this.userNoPW = null;
    localStorage.clear();
  }
}
