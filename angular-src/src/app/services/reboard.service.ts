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
  view : View;

  constructor(private http: HttpClient) {}

    prepEndpoint(ep) {
    return ep;
    }
    
    viewUser(view): Observable<any> {
      const viewUrl = 'http://localhost:3000/users/view';
      return this.http.post(viewUrl, view, httpOptions);
    }
    
}
