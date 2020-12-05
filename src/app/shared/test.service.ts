import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Domain} from '../../model/Domain';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Test} from '../../model/Test';
import {Comment} from '../../model/Comment';

@Injectable({
  providedIn: 'root'
})
export class TestService {
 private baseUrl = 'http://localhost:8081/MyApplication/api/v1';

  constructor(private http: HttpClient) {
  }
  getTestbyDom(idDom): Observable<Test[]> {
    return this.http.get<Test[]>(this.baseUrl + '/TestbyDom/' + idDom)
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



