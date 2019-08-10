import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Dairy, UpdateResponse, DeleteResponse } from '../../models/dairy';
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
  updateResponse: UpdateResponse;
  deleteResponse: DeleteResponse;
  deleteError: string;

  constructor(
    private elem: ElementRef,
    private formBulider: FormBuilder,
    private dairyServ: DairyService) { }

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
          this.article = this.form.value;
        }
        this.updateResponse = response;
      },
      error => console.log(error)
    );
  }

  /**
   * Delete article
   */
  delete() {
    this.dairyServ.delete(this.article.id).subscribe(
      response => {
        if (response.status) {
          // close 
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
