import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Domain} from '../model/Domain';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Test} from '../model/Test';
import {Comment} from '../model/Comment';

@Injectable({
  providedIn: 'root'
})
export class TestService {
 private baseUrl = 'http://localhost:8081/MyApplication/api/v1';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {
  }
  getTestbyDom(idDom): Observable<Test[]> {
    return this.http.get<Test[]>(this.baseUrl + '/TestbyDom/' + idDom, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  getquestionTest(idDom) {
    return this.http.get(this.baseUrl + '/nbrtestByDom/' + idDom, this.httpOptions)
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



