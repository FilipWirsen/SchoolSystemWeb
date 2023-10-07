import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../APIClient';

@Injectable({
  providedIn: 'root'
})
export class APIClientService extends Client {
  constructor(http: HttpClient) {
    super(http, 'https://localhost:7052');
  }
}

