
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get<User[]>(this.apiUrl,{headers:{ accept: "Accept: application/json"}});
  }
}
