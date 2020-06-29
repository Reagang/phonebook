import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment.prod'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PhoneBookService {
  baseUrl = environment.apiUrl; 
  constructor(private http: HttpClient) {

  }
}
