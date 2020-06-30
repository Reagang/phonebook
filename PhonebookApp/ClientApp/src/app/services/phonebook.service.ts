import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment.prod'
import { HttpClient } from '@angular/common/http';
import { Phonebook } from '../models/phonebook.model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { PhonebookEntry } from '../models/phonebookentry.model';

@Injectable({
  providedIn: 'root'
})

export class PhoneBookService {
  baseUrl = environment.apiUrl; 
  constructor(private http: HttpClient) {

  }

  getPhonebookList(): Observable<Phonebook[]> {
    return this.http.get(this.baseUrl + 'Phonebook')
      .pipe(
        map(res => res['payload'])
        );
  }

  addPhonebookEntry(model: any): Observable<PhonebookEntry[]> {
    console.log(model);
    return this.http.post<PhonebookEntry[]>(this.baseUrl + 'PhoneBook', model);
  }
}
