import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Comment} from '../model/Comment';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  private baseUrl = 'http://localhost:8081/MyApplication/api/v1';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  createSubscribe(subscribe, idDom): Observable<Comment> {
    return this.http.post<Comment>(this.baseUrl + '/addSubscribe/' + idDom, JSON.stringify(subscribe), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  constructor(private http: HttpClient) { }
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
