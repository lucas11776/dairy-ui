import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Dairy } from '../../models/dairy';
import { DairyService } from '../../shared/dairy.service';

// declere (scope)
declare var $: any;

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Dairy;
  form: FormGroup;
  updatedError: string;
  deleteError: string;

  constructor(
    private elem: ElementRef, 
    private formBulider: FormBuilder,
    private dairyServ: DairyService) { }

  ngOnInit() {
    this.form = this.formBulider.group({
      title: [this.article.title, [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]],
      text: [this.article.text, [ Validators.required, Validators.minLength(20), Validators.maxLength(500) ]]
    });
  }

  update() {
    // this.dairyServ.
  }

  delete() { }

  openUpdateModel() {
    $(this.elem.nativeElement).find('#modelArticleUpdate').modal('show');
  }

  openDeleteModel() {
    $(this.elem.nativeElement).find('#modelArticleDelete').modal('show');
  }

}
