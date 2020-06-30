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
    return this.http.get<Phonebook[]>(this.baseUrl + 'Phonebook');
  }

  addPhonebookEntry(model: any): Observable<PhonebookEntry[]> {
    
    return this.http.post<PhonebookEntry[]>(this.baseUrl + 'PhoneBook', model);
  }
}
