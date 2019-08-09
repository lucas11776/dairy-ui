import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DairyService {

  constructor(private http: HttpClient) { }

  /**
   * Insert dairy record to database
   */
  create(record) {

  }
}
