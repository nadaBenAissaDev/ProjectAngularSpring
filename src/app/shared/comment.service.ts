import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Comment} from '../model/Comment';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = 'http://localhost:8081/MyApplication/api/v1';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  createComment(comment, idDom): Observable<Comment> {
    return this.http.post<Comment>(this.baseUrl + '/addComment/' + idDom, JSON.stringify(comment), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  getCommentbyDom(idDom): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.baseUrl + '/ListComment/' + idDom, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
    // return this.http.get(`${this.baseUrl}`);
  }
  deleteComment(idCom): Observable<Comment>{
    return this.http.delete<Comment>(this.baseUrl + '/deleteComment/' + idCom, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  updateComment(comment, id): Observable<Comment> {
    return this.http.put<Comment>(this.baseUrl + '/updateComment/' + id, comment)
      .pipe(
        catchError(this.errorHandler)
      );
  }
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
