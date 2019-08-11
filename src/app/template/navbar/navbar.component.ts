import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

import { ColorService } from '../../shared/color.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  colorSubject: Subject<string>;
  color: string;

  constructor(private colorServ: ColorService) { }

  ngOnInit() {
    this.colorServ.color.subscribe(color => this.color = color);
  }

  /**
   * Unsubscribe to color
   */
  ngOnDestroy(): void {
    this.colorSubject.unsubscribe();
  }

}
