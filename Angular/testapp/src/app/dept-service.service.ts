import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeptServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getDepts() {
    return this.httpClient.get('http://localhost:3000/dept');
  }
}
