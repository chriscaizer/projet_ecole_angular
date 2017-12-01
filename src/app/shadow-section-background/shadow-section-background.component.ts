import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shadow-section-background',
  templateUrl: './shadow-section-background.component.html',
  styleUrls: ['./shadow-section-background.component.scss']
})
export class ShadowSectionBackgroundComponent implements OnInit {

  @Input() cards;

  constructor() { }

  ngOnInit() {
  }

}
