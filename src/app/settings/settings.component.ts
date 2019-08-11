import { Component, OnInit } from '@angular/core';

import { ColorService } from '../shared/color.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  colors: Array<{color: string}>;

  constructor(private colorServ: ColorService) { }

  ngOnInit() {
    this.colors = this.colorServ.colors;
  }

  /**
   * Change appliction color
   */
  changeColor(color: string) {
    this.colorServ.change(color);
  }

}
