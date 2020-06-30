import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { error } from '@angular/compiler/src/util';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { environment } from '../../environments/environment.prod';
import { AlertifyService } from '../services/alertifyjs.service';
import { PhoneBookService } from '../services/phonebook.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhoneBookComponent implements OnInit {
  baseUrl = environment.apiUrl;
  values: any;
  postData: any;
  term: string;
  form: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder, private alertify: AlertifyService, private phonebookService: PhoneBookService) {
    
  }

  ngOnInit() {
    this.createPhonbookEntryForm();
    this.getPeople();
  }
  createPhonbookEntryForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(35)]],
      surname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(35)]],
      number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]]
    })
  }

  getPeople() {
    this.phonebookService.getPhonebookList().subscribe((response) => {
      this.values = response;
    }, error => {
        this.alertify.error(error);
    });
  }
  onSubmit() {
    
    if (this.form.status == 'VALID') {
      console.log(this.form.value);
      //this.values.push(this.form.value)
      //let cloned = this.values.slice()
      //this.values = cloned
      let postSuccess = true

      this.phonebookService.addPhonebookEntry(this.form.value).subscribe(() => {
        //this.alertify.success("Added succesfully");
      }, error => {
          postSuccess = false;
          ///this.alertify.error(error);
      });

      if (postSuccess === true) {
        this.alertify.success("Added succesfully");
      }
      this.form.reset();
      this.hide();
    }
   
  }
  showModal: boolean;
  name: string;
  surname: string;
  number: string;
  onClick(event) {
    this.showModal = true;
  }
  hide() {
    this.showModal = false;
    $(document.body).removeClass("modal-open");
    $(".modal-backdrop").remove();
  }
}
