import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { ColorService } from '../../shared/color.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  color: string;

  constructor(private colorServ: ColorService) { }

  ngOnInit() {
    this.colorServ.color.subscribe(color => this.color = color);
  }

}
