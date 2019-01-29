import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { catchError, tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = '/assets/php/email.php';

  constructor() {

  }

  /*
  sendEmail(data: any): Observable<any> | any {
    return this.http.post(this.url, data)
      .pipe(
        tap((response) => console.log('server data:', response)),
        catchError(this.handleError('getData'))
      );
  }

  private handleError(operation: String) {
    return (err: any) => {
      const errMsg = `error in ${operation}() retrieving ${this.url}`;
      console.log(`${errMsg}:`, err);
      if (err instanceof HttpErrorResponse) {
        // you could extract more info about the error if you want, e.g.:
        console.log(`status: ${err.status}, ${err.statusText}`);
        // errMsg = ...
      }
      return Observable.throw(errMsg);
    };
  } */
}
