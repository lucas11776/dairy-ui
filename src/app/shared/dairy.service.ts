import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Dairy, Article, CreateResponse, DeleteResponse} from '../models/dairy';

@Injectable({
  providedIn: 'root'
})
export class DairyService {

  constructor(private http: HttpClient) { }

  /**
   * Get http-error-response message
   */
  httpError(error: HttpErrorResponse) {
    return throwError(error.message);
  }

  /**
   * Get dairy record/s in database
   */
  get(): Observable<Array<Dairy>> {
    return this.http.get<Array<Dairy>>('/api/').pipe(
      retry(2)
    );
  }

  /**
   * Insert dairy record/s to database
   */
  create(record: Article): Observable<CreateResponse> {
    return this.http.post<CreateResponse>('/api/create', record).pipe(
      retry(2)
    );
  }

  /**
   * Delete dairy record on databse
   */
  delete(id: number) {
    // return this.http.post<DeleteResponse>("/api/delete/${id}");
  }
}
