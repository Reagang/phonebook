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
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.http.get('https://localhost:44362/api/weatherforecast')
      .subscribe(response => {
        this.values = Response;
        console.log(response);
      }, error => {
          console.log(error);
      })
  }
}
