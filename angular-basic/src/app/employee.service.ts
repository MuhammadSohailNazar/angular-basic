import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IEmployee } from './IEmployee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public _url = "/assets/data/empl1oyee.json";
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).pipe(
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
