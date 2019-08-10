import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Dairy } from '../models/dairy';
import { DairyService } from '../shared/dairy.service';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html',
  styleUrls: ['./dairy.component.css']
})
export class DairyComponent implements OnInit {

  articles$: Observable<Array<Dairy>>;
  filter: string;
  error: string;
  total: number;
  limit = 2;

  constructor(private dairyServ: DairyService) { }

  /**
   * Get dairy articles
   */
  ngOnInit() {
    this.articles$ = this.dairyServ.get(this.limit).pipe(
      map(response => {
        this.total = response.total;
        return response.articles;
      })
    );
  }

  /**
   * Load more articles
   */
  loadMore() {
    this.limit += 2;
    this.ngOnInit(); // get dairy articles
  }

}
