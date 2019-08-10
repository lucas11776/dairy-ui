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

  total: number;
  limit = 2;
  articles$: Observable<Array<Dairy>>;
  filter: string;
  error: string;

  constructor(private dairyServ: DairyService) { }

  ngOnInit() {
    this.articles$ = this.dairyServ.get(this.limit).pipe(
      map(response => {
        this.total = response.total;
        return response.articles;
      })
    );
  }

  loadMore() {
    this.limit += 2;
    this.ngOnInit(); // get dairy articles
  }

}
