import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class SendmailsvcService {

  constructor(private http: HttpClient) { }

  sendEmail(obj): Observable<User> {
    return this.http.post<User>('http://localhost:3000/sendFormData', obj)
  }
}
