import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhoneBookComponent implements OnInit {
  values: any;
  term: string;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.http.get('https://localhost:44362/api/Phonebook')
      .subscribe(response => {
        this.values = response;
        console.log(response);
      }, error => {
          console.log(error);
      })
  }
  onSubmit(data) {
    this.http.post('https://localhost:44362/api/' + 'person', data)
      .subscribe((result) => {
        console.warn("result", result)
      });
  }
  showModal: boolean;
  id: number;
  name: string;
  surname: string;
  number: string;
  onClick(event) {
    this.showModal = true; // Show-Hide Modal Check
    this.id = event.target.id;
    this.name = document.getElementById("name" + this.id).innerHTML;
    this.surname = document.getElementById("surname" + this.id).innerHTML;
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }
}
