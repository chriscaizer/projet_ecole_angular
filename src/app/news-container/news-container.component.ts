import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.scss']
})
export class NewsContainerComponent implements OnInit {

  posts: any[];

  constructor(private _wpService: WordpressService) { }

  ngOnInit() {
    this._wpService.getPosts()
      .subscribe(res => this.posts = <any[]>res);
  }

}
