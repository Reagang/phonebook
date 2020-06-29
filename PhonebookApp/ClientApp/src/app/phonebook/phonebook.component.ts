import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { error } from '@angular/compiler/src/util';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { environment } from '../../environments/environment.prod';

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
  constructor(private http: HttpClient, private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.createPhonbookEntryForm();
    //this.form = new FormGroup({
    //  name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(35)]),
    //  surname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(35)]),
    //  number: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")])
    //})
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
    this.http.get(this.baseUrl + 'Phonebook')
      .subscribe(response => {
        this.values = response;
      }, error => {
          console.log(error);
      })
  }
  onSubmit(formData) {
    if (this.form.status == 'Valid') {
      this.values.push(formData)
      let cloned = this.values.slice()
      this.values = cloned
      this.http.post(this.baseUrl + 'PhoneBook', formData)
        .subscribe((result) => {

        }, error => {
          console.log(error);
        });
      this.hide();
    }
   
  }
  showModal: boolean;
  id: number;
  name: string;
  surname: string;
  number: string;
  onClick(event) {
    this.showModal = true;
  }
  hide() {
    this.showModal = false;
  }
}
