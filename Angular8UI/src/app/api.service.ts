import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = 'http://localhost:8000/api/place/';
  private SERVER_URL_1 = 'http://localhost:8000/api/place/1/';

  API_KEY = '8c7b6769492e4022a147db912adaa15d';
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  public sendGetRequest() {
    return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
  }
  constructor(private httpClient: HttpClient) { }
  public getPlaces() {
    return this.httpClient.get(this.SERVER_URL);
  }
  public getPlaceDetail(id) {
    return this.httpClient.get(this.SERVER_URL + id + '/');
  }
}
