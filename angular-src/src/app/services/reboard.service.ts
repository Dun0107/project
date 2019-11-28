import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { View } from '../models/ReBoard';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
@Injectable({
  providedIn: 'root'
})
export class ReboardService {

  [x: string]: any;
  ReboardToken: any;
  view : View;
  

  constructor(private http: HttpClient) {}

    prepEndpoint(ep) {
    return ep;
    }
    
    viewUser(view): Observable<any> {
      const viewUrl = 'http://localhost:3000/users/view';
      return this.http.post(viewUrl, view, httpOptions);
    }
    
  getList2(): Observable<any> {
    this.ReboardToken = localStorage.getItem("id_token");
    const httpOptions1 = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.ReboardToken
      })
    };
    const list2Url = "http://localhost:3000/users/list2";
    return this.http.get(list2Url, httpOptions1);
  }
  storeViewData(token, view) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("write", JSON.stringify(view));
    this.ReboardToken = token;
    this.view = view;
  }
}

