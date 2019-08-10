import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Dairy } from '../models/dairy';
import { DairyService } from '../shared/dairy.service';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html',
  styleUrls: ['./dairy.component.css']
})
export class DairyComponent implements OnInit {
  limit = 5;
  articles$: Observable<Array<Dairy>>;
  filter: string;
  error: string;

  constructor(private dairyServ: DairyService) { }

  ngOnInit() {
    this.articles$ = this.dairyServ.get(this.limit);
  }

  loadMore() {
    this.limit += 5;
    this.ngOnInit(); // get dairy articles
  }

}
