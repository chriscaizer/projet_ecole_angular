import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  mater = {
    title: 'maternelle',
    directionName: 'mme carre christine',
    directionTel: '05 61 97 37 54',
    directionMail: 'ce.0312487k@ac-toulouse.fr',
    parentMail: 'dpemater@gmail.com',
    link: 'mater'
  };

  elem = {
    title: 'élémentaire',
    directionName: 'mme turroc suzanna',
    directionTel: '05 61 87 04 51',
    directionMail: 'ce.0310556l@ac-toulouse.fr',
    parentMail: 'dpeelem@gmail.com',
    link: 'elem'
  };

  cards = {
    mater: this.mater,
    elem: this.elem
  }

  constructor() { }

  ngOnInit() {
  }

}
