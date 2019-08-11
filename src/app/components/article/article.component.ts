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

  /**
   * Ajax request load status
   */
  loading: boolean;

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
    this.loading = true;
    const req = this.dairyServ.update(this.form.value).subscribe(
      response => {
        if (response.status) {
          this.article.title = this.form.value.title;
          this.article.text = this.form.value.text;
        }
        this.updateResponse = response;
        this.loading = false;
        req.unsubscribe();
      },
      error => {
        console.warn(error);
        this.loading = false;
      }
    );
  }

  /**
   * Delete article
   */
  delete() {
    this.loading = true;
    const req = this.dairyServ.delete(this.article.id).subscribe(
      response => {
        if (response.status) {
          this.closeDeleteModal();
          this.article = null;
        }
        this.deleteResponse = response;
        this.loading = false;
        req.unsubscribe();
      },
      error => {
        console.warn(error);
        this.loading = false;
      }
    );
  }

  /**
   * Open update article modal
   */
  openUpdateModal() {
    $(this.elem.nativeElement).find('#modelArticleUpdate').modal('show');
  }

  /**
   * Open delete article modal
   */
  openDeleteModal() {
    $(this.elem.nativeElement).find('#modelArticleDelete').modal('show');
  }

  /**
   * Close delete modal
   */
  closeDeleteModal() {
    $(this.elem.nativeElement).find('#modelArticleDelete').modal('hide');
  }

  /**
   * Close update response alert box
   */
  closeUpdatedResponse() {
    this.updateResponse = null;
  }

}
