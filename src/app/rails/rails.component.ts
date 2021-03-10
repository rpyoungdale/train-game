import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-rails',
  templateUrl: './rails.component.html',
  styleUrls: ['./rails.component.scss']
})
export class RailsComponent implements OnInit, OnChanges {
  @Input() newGame: boolean;

  rails = [
    { 
      name: 'A',
      color: '#FF0000',
      firstVal: 2,
      secondVal: 1,
    },
    { 
      name: 'B',
      color: '#FF7A50',
      firstVal: 4,
      secondVal: 2,
    },
    { 
      name: 'C',
      color: '#FF529B',
      firstVal: 7,
      secondVal: 5,
    },
    { 
      name: 'D',
      color: '#4CD964',
      firstVal: 5,
      secondVal: 3,
    },
  ];

  rails2 = [
    {
      name: 'E',
      color: '#FFE073',
      firstVal: 4,
      secondVal: 2,
    },
    {
      name: 'F',
      color: '#8D5DCA',
      firstVal: 4,
      secondVal: 2,
    },
    {
      name: 'G',
      color: '#047BFD',
      firstVal: 5,
      secondVal: 3,
    },
    {
      name: 'H',
      color: '#707070',
      firstVal: 6,
      secondVal: 4,
    },
    {
      name: 'I',
      color: '#009065',
      firstVal: 4,
      secondVal: 2,
    },
  ]

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges() {
    console.log('hey')
  }

  claimRail(id: string): void {
    const firstSquare = document.getElementById('first-'+id).style;
    firstSquare.opacity = firstSquare.opacity !== '0.1' ? '0.1' : '1';
    const secondSquare = document.getElementById('second-' + id).style;
    secondSquare.opacity = secondSquare.opacity !== '1' ? '1' : '0.1';
  }
}
