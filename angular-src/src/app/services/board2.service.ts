import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/Board2';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
@Injectable({
  providedIn: "root"
})
export class Board2Service {
  [x: string]: any;
  board2Token: any;
  Message: Message;

  constructor(private http: HttpClient) {}

  prepEndpoint(ep) {
    return ep;
  }

  messageUser(message): Observable<any> {
    const messageUrl = "http://localhost:3000/users/message";
    return this.http.post(messageUrl, message, httpOptions);
  }

  // getList(): Observable<any> {
  //   const dashboardUrl = this.prepEndpoint("users/dashboard");
  //   return this.http.get(dashboardUrl, httpOptions);
  // }

  //수연이코드
  getList3(): Observable<any> {
    this.board2Token = localStorage.getItem("id_token");
    const httpOptions1 = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.board2Token
      })
    };
    const list3Url = "http://localhost:3000/users/list3";
    return this.http.get(list3Url, httpOptions1);
  }
  storeMessageData(token, message) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("message", JSON.stringify(message));
    this.board2Token = token;
    this.message = message;
  }
}
    

