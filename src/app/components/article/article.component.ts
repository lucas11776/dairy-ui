import { Component, OnInit, EventEmitter, Input } from '@angular/core';

import { Dairy } from '../../models/dairy';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Dairy;

  constructor() { }

  ngOnInit() {
  }

}
