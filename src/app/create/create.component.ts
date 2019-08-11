import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CreateResponse } from '../models/dairy';
import { DairyService } from '../shared/dairy.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  /**
   * Form Group
   */
  form: FormGroup;

  /**
   * Create artcle response
   */
  response: CreateResponse;

  /**
   * Request error
   */
  error: string;

  /**
   * Ajax load state
   */
  loading: boolean;

  constructor(private formBuilder: FormBuilder, private dairyServ: DairyService) { }

  /**
   * Setup form validation
   */
  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(30) ]],
      title: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ]],
      text: ['', [ Validators.required, Validators.minLength(20), Validators.maxLength(500) ]]
    });
  }

  /**
   * Create new dairy article
   */
  create() {
    this.loading = true;
    const req = this.dairyServ.create(this.form.value).subscribe(
      response => {
        this.loading = false;
        this.response = response;
        this.form.reset();
        req.unsubscribe();
      },
      error => {
        this.loading = false;
        this.error = error;
      }
    );
  }

  /**
   * Clear create response
   */
  closeResponse() {
    this.response = null;
  }

  /**
   * Clear http error message
   */
  clearError() {
    this.error = null;
  }

}
