import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() newGame: boolean;

  cards = [
    {
      display: 'Free',
      name: 'free',
    },
    {
      display: 'Skip 2',
      name: 'skip-2',
    },
    {
      display: 'Skip 2',
      name: 'skip-2',
    },
    {
      display: '3',
      name: 'standard-3',
    },
    {
      display: '3',
    name: 'standard-3',
    },
    {
      display: '3',
      name: 'standard-3',
    },
    {
      display: '4',
      name: 'standard-4',
    },
    {
      display: '4',
      name: 'standard-4',
    },
    {
      display: '4',
      name: 'standard-4',
    },
    {
      display: '5',
      name: 'standard-5',
    },
    {
      display: '5',
      name: 'standard-5',
    },
    {
      display: '6',
      name: 'standard-6',
    },
    {
      display: 'Transfer',
      name: 'transfer',
    },
    {
      display: 'Transfer',
      name: 'transfer',
    },
  ];
  
  // @Output() cardsUsed = new EventEmitter<any[]>();
  // usedCards = [];

  nextCardIndex = 0;
  forward = true;
  needsShuffle = false;
  cardFlipped = false;

  constructor(private service: SharedServiceService) { }

  ngOnInit(): void {
    this.shuffle();
  }

  nextCard(): void {
    debugger
    if(this.nextCardIndex < this.cards.length) {
      this.cardFlipped = true;
      if(!this.forward) this.nextCardIndex += 1;
      const card = document.getElementById("currentCard") as HTMLImageElement;
      card.src = `../assets/${this.cards[this.nextCardIndex].name}.svg`;
      this.service.addCard(this.cards[this.nextCardIndex].name);
      // this.cardsUsed.emit(this.usedCards);
      if (this.cards[this.nextCardIndex].display === '6') this.needsShuffle = true;
      this.nextCardIndex += 1;
      this.forward = true;
    } else {
      this.cardFlipped = false;
      this.shuffle();
    }
  }

  lastCard(): void {
    if(this.nextCardIndex > 0) {
      if(this.forward) this.nextCardIndex -= 1;
      this.nextCardIndex -= 1;
      const card = document.getElementById("currentCard") as HTMLImageElement;
      const svg = this.nextCardIndex > 0 ? this.cards[this.nextCardIndex].name : 'back';
      card.src = `../assets/${svg}.svg`;
      this.forward = false;
    } else {
      this.nextCardIndex = 0;
    }
  }

  shuffle(): void {
    let currentIndex = this.cards.length;
    let temporaryValue;
    let randomIndex: number;

    this.needsShuffle = false;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }

    const card = document.getElementById("currentCard") as HTMLImageElement;
    if(card) card.src = `../assets/back.svg`;
    
    this.nextCardIndex = 0;
  }


}
