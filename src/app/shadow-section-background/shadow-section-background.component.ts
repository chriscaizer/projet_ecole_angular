import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shadow-section-background',
  templateUrl: './shadow-section-background.component.html',
  styleUrls: ['./shadow-section-background.component.scss']
})
export class ShadowSectionBackgroundComponent implements OnInit {

  mater = {
    title: 'maternelle',
    directionName: 'mme carre christine',
    directionTel: '05 61 97 37 54',
    directionMail: 'ce.0312487k@ac-toulouse.fr',
    parentMail: 'dpemater@gmail.com'
  };

  elem = {
    title: 'élémentaire',
    directionName: 'mme turroc suzanna',
    directionTel: '05 61 87 04 51',
    directionMail: 'ce.0310556l@ac-toulouse.fr',
    parentMail: 'dpeelem@gmail.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
