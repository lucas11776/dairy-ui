import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { DairyResponse, Article, Update, } from '../models/dairy';
import { CreateResponse, DeleteResponse, UpdateResponse } from '../models/dairy';

@Injectable({
  providedIn: 'root'
})
export class DairyService {

  constructor(private http: HttpClient) { }

  /**
   * Get http-error-response message
   */
  private httpError(error: HttpErrorResponse) {
    return throwError(error.message);
  }

  /**
   * Get dairy record in database
   */
  get(limit: number = 10): Observable<DairyResponse> {
    return this.http.get<DairyResponse>('/api/?limit=' + limit).pipe(
      retry(2), catchError(this.httpError)
    );
  }

  /**
   * Insert dairy record in database
   */
  create(record: Article): Observable<CreateResponse> {
    return this.http.post<CreateResponse>('/api/create', record).pipe(
      retry(2), catchError(this.httpError)
    );
  }

  /**
   * Updated dairy record in database
   */
  update(record: Update): Observable<UpdateResponse> {
    return this.http.post<UpdateResponse>('/api/update', record).pipe(
      retry(2), catchError(this.httpError)
    );
  }
  /**
   * Delete dairy record on databse
   */
  delete(ID: number) {
    return this.http.post<DeleteResponse>('/api/delete', {id: ID}).pipe(
      retry(2), catchError(this.httpError)
    );
  }
}
