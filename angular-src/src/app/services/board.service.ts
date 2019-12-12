import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Write } from "../models/Board";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class BoardService {
  [x: string]: any;
  boardToken: any;
  write: Write;

  constructor(private http: HttpClient) {}

  writeUser(write): Observable<any> {
    const writeUrl = "http://localhost:3000/users/write";
    return this.http.post(writeUrl, write, httpOptions);
  }
  getList(): Observable<any> {
    this.boardToken = localStorage.getItem("id_token");
    const httpOptions1 = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.boardToken
      })
    };
    const listUrl = "http://localhost:3000/users/list";
    return this.http.get(listUrl, httpOptions1);
  }
  storeWriteData(token, write) {
    localStorage.setItem("", token);
    localStorage.setItem("write", JSON.stringify(write));
    this.boardToken = token;
    this.write = write;
  }
}
