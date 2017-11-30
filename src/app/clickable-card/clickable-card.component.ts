import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clickable-card',
  templateUrl: './clickable-card.component.html',
  styleUrls: ['./clickable-card.component.scss']
})
export class ClickableCardComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
