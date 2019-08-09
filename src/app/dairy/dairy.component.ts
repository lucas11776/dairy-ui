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

  articles: Observable<Array<Dairy>>;
  filter: string;

  constructor(private dairyServ: DairyService) { }

  ngOnInit() {
    console.log(this.dairyServ.get());
  }

}
