import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class WordpressService {

  wordpressUrl = environment.wordpress_url;

  constructor(private _http: HttpClient) {}

  getPosts() {
    return this._http.get(`${this.wordpressUrl}/posts`);
  }
}
