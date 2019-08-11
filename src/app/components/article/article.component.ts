import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Dairy, UpdateResponse, DeleteResponse } from '../../models/dairy';
import { DairyService } from '../../shared/dairy.service';

/*
  Declear (scope)
*/
declare var $: any;

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  /**
   * Single article
   */
  @Input() article: Dairy;

  /**
   * Update aricle form
   */
  form: FormGroup;

  /**
   * Update article reponse
   */
  updateResponse: UpdateResponse;

  /**
   * Delete aricle response
   */
  deleteResponse: DeleteResponse;

  constructor(
    private elem: ElementRef,
    private formBulider: FormBuilder,
    private dairyServ: DairyService
  ) { }

  /**
   * Setup form validation
   */
  ngOnInit() {
    this.form = this.formBulider.group({
      id: [this.article.id],
      title: [this.article.title, [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]],
      text: [this.article.text, [ Validators.required, Validators.minLength(20), Validators.maxLength(500) ]]
    });
  }

  /**
   * Update articles
   */
  update() {
    this.dairyServ.update(this.form.value).subscribe(
      response => {
        if (response.status) {
          this.article.title = this.form.value.title;
          this.article.text = this.form.value.text;
        }
        this.updateResponse = response;
      },
      error => console.warn(error)
    );
  }

  /**
   * Delete article
   */
  delete() {
    this.dairyServ.delete(this.article.id).subscribe(
      response => {
        if (response.status) {
          // close article modal
          $(this.elem.nativeElement).find('#modelArticleDelete').modal('hide');
          this.article = null;
        }
        this.deleteResponse = response;
      },
      error => console.warn(error)
    );
  }

  /**
   * Open update article modal
   */
  openUpdateModel() {
    $(this.elem.nativeElement).find('#modelArticleUpdate').modal('show');
  }

  /**
   * Open delete article modal
   */
  openDeleteModel() {
    $(this.elem.nativeElement).find('#modelArticleDelete').modal('show');
  }

  /**
   * Close update response alert box
   */
  closeUpdatedResponse() {
    this.updateResponse = null;
  }

}
