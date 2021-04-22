import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-rails',
  templateUrl: './rails.component.html',
  styleUrls: ['./rails.component.scss']
})
export class RailsComponent implements OnInit {
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

  rails3 = [
    {
      name: 'J',
      color: '#FF529B',
      firstVal: 6,
      secondVal: 4,
    },
    {
      name: 'K',
      color: '#FFE073',
      firstVal: 3,
      secondVal: 2,
    },
    {
      name: 'L',
      color: '#8D5DCA',
      firstVal: 4,
      secondVal: 2,
    },
    {
      name: 'M',
      color: '#047BFD',
      firstVal: 5,
      secondVal: 3,
    },
  ];

  rails4 = [
    {
      name: 'N',
      color: '#707070',
      firstVal: 2,
      secondVal: 1,
    },
    {
      name: 'O',
      color: '#009065',
      firstVal: 4,
      secondVal: 2,
    },
    {
      name: 'P',
      color: '#FF0000',
      firstVal: 4,
      secondVal: 2,
    },
    {
      name: 'Q',
      color: '#4CD964',
      firstVal: 4,
      secondVal: 2,
    },
    {
      name: 'R',
      color: '#FF7A50',
      firstVal: 7,
      secondVal: 5,
    },
  ]

  gameMode = 'metro';

  constructor(private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.sharedService.resetGame.subscribe(newGame => {
      if (newGame) {
        this.resetRails();
      }
    });

    this.sharedService.gameMode.subscribe(mode => {
      this.gameMode = mode;
    });
  }

  claimRail(id: string): void {
    const firstSquare = document.getElementById('first-'+id).style;
    firstSquare.opacity = firstSquare.opacity !== '0.1' ? '0.1' : '1';
    const secondSquare = document.getElementById('second-' + id).style;
    secondSquare.opacity = secondSquare.opacity !== '1' ? '1' : '0.1';
  }

  resetRails() {
    if(this.gameMode === 'metro') {
      this.rails.forEach((rail) => {
        const firstSquare = document.getElementById('first-' + rail.name).style;
        firstSquare.opacity = '1';
        const secondSquare = document.getElementById('second-' + rail.name).style;
        secondSquare.opacity = '0.1';
      });
  
      this.rails2.forEach((rail) => {
        const firstSquare = document.getElementById('first-' + rail.name).style;
        firstSquare.opacity = '1';
        const secondSquare = document.getElementById('second-' + rail.name).style;
        secondSquare.opacity = '0.1';
      });
    } else {
      this.rails3.forEach((rail) => {
        const firstSquare = document.getElementById('first-' + rail.name).style;
        firstSquare.opacity = '1';
        const secondSquare = document.getElementById('second-' + rail.name).style;
        secondSquare.opacity = '0.1';
      });
  
      this.rails4.forEach((rail) => {
        const firstSquare = document.getElementById('first-' + rail.name).style;
        firstSquare.opacity = '1';
        const secondSquare = document.getElementById('second-' + rail.name).style;
        secondSquare.opacity = '0.1';
      });
    }

  }
}
