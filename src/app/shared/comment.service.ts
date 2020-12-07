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
    return this.http.get<Comment[]>(this.baseUrl + '/ListComment/' + idDom)
      .pipe(
        catchError(this.errorHandler)
      );
    // return this.http.get(`${this.baseUrl}`);
  }
  deleteComment(idCom){
    return this.http.delete<Comment>(this.baseUrl + '/deleteComment/' + idCom, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  updateComment(id, comment): Observable<Comment> {
    return this.http.put<Comment>(this.baseUrl + '/' + id, JSON.stringify(comment), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

 /* getById(id): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + '/products/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }


*/
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  /*createComment(comment, id): Observable<Comment> {
    return this.http.post<Comment>(this.baseUrl + '/addComment/' + id, JSON.stringify(comment), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  // return this.http.post<Comment>('http://localhost:8081/MyApplication/api/v1/addComment',2 ,"ok");
  }*/
}
