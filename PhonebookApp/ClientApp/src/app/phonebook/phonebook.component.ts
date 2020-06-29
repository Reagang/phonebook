import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { error } from '@angular/compiler/src/util';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhoneBookComponent implements OnInit {
  values: any;
  postData: any;
  term: string;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: [''],
      surname: [''],
      number: ['']
    })
  }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.http.get('https://localhost:44362/api/Phonebook')
      .subscribe(response => {
        this.values = response;
      }, error => {
          console.log(error);
      })
  }
  onSubmit(formData) {
    this.values.push(formData)
    let cloned = this.values.slice()
    this.values = cloned
    this.http.post('https://localhost:44362/api/' + 'PhoneBook', formData)
      .subscribe((result) => {
       
      }, error => {
        console.log(error);
      });
    this.hide();
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
