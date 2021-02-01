import { Injectable } from '@angular/core';
import {md5} from 'src/md5';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelServiceService {
  API_KEY_PUBLIC:string="776da3c08945b7eab896ac71d7888091";
  API_KEY_PRIVATE:string="07a6874ab9e38c7ed11795598932a7381ea20c08";
  final_string:string="1"+this.API_KEY_PRIVATE+this.API_KEY_PUBLIC;
  hashvalue:string = md5(this.final_string);
  constructor(private http:HttpClient) { }

  getHeroes(){
    return this.http.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.API_KEY_PUBLIC}&hash=${this.hashvalue}`);
  }

  debugMe(){
    let e = md5(this.final_string);
    return e;
  }

  getComics(){
    return this.http.get(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${this.API_KEY_PUBLIC}&hash=${this.hashvalue}`)
  }
}
