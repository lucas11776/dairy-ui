import { Component, OnInit } from '@angular/core';

import { DairyService } from '../shared/dairy.service';

@Component({
  selector: 'app-dairy',
  templateUrl: './dairy.component.html',
  styleUrls: ['./dairy.component.css']
})
export class DairyComponent implements OnInit {

  constructor(private dairyServ: DairyService) { }

  ngOnInit() {
  }

}
