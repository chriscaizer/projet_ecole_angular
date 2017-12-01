import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mater-page',
  templateUrl: './mater-page.component.html',
  styleUrls: ['./mater-page.component.scss']
})
export class MaterPageComponent implements OnInit {

  cards = [
    {
      title: 'PS',
      subtitle: 'Petite Section',
      teachers: ['Mme Carré', 'Mme ...'],
      atsem: 'Nadine',
      helper: '',
      count: 24
    },
    {
      title: 'MS',
      subtitle: 'Petite Section',
      teachers: ['Mme Carré', 'Mme ...'],
      atsem: 'Nadine',
      helper: '',
      count: 24
    },
    {
      title: 'GS',
      subtitle: 'Petite Section',
      teachers: ['Mme Carré', 'Mme ...'],
      atsem: 'Nadine',
      helper: '',
      count: 24
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
