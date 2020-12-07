import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Domain} from '../model/Domain';
import {Test} from '../model/Test';
import {Comment} from '../model/Comment';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
 private baseurl = 'http://localhost:8081/MyApplication/api/v1';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {
  }
  getAllDomain(): Observable<Domain[]> {
    return this.http.get<Domain[]>(this.baseurl + '/ListDomain')
      .pipe(
        catchError(this.errorHandler)
      );
  }
  updateDomainLike(id): Observable<Domain> {
    return this.http.put<Domain>(this.baseurl + '/updateDom/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
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
}
