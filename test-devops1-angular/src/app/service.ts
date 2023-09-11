import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private apiUrl = 'http://20.100.213.150'; // Replace with your Spring Boot API URL

  constructor(private http: HttpClient) { }

  // Example GET request
  getSomeData() {
    return this.http.get(`${this.apiUrl}/data`);
  }
}