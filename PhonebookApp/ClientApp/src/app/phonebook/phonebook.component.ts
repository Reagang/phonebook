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
        //console.log(response);
      }, error => {
          console.log(error);
      })
  }
  onSubmit(formData) {
    console.log(formData);
    this.values.push(formData)
    let cloned = this.values.slice()
    // OR IN ES6 // let cloned = [...dataSource]
    this.values = cloned
    //var formData: any = new FormData();
    //formData.append("name", this.form.get('name').value);
    //formData.append("surname", this.form.get('surname').value);
    //formData.append("number", this.form.get('number').value);
    const data = JSON.stringify(formData);
    console.log(data);
    console.log(formData);
    this.http.post('https://localhost:44362/api/' + 'PhoneBook', formData)
      .subscribe((result) => {
        console.warn("result", result);
        
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
    console.log(event);
    this.showModal = true; // Show-Hide Modal Check
    //this.id = event.target.id;
    //this.name = document.getElementById("name").innerHTML;
    //this.surname = document.getElementById("surname").innerHTML;
    //this.number = document.getElementById("number").innerHTML;

    ////this.postData.id = event.target.id;
    //this.postData.name = document.getElementById("name").innerHTML;
    //this.postData.surname = document.getElementById("surname").innerHTML;
    //this.postData.number = document.getElementById("number").innerHTML;
    //this.onSubmit(this.postData);
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }
}
