import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {
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

  nextCardIndex = 0;
  forward = true;
  needsShuffle = false;
  cardFlipped = false;
  gameOver = false;

  resetSubscription: Subscription;
  gameOverSubscription: Subscription;

  constructor(private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.shuffle();
    this.resetSubscription = this.sharedService.resetGame.subscribe(newGame => {
      if(newGame) {
        this.resetBoard();
      }
    });
    this.gameOverSubscription = this.sharedService.isGameOver.subscribe(isGameOver => {
      this.gameOver = isGameOver;
    });
  }

  nextCard(): void {
    if(this.nextCardIndex < this.cards.length) {
      this.cardFlipped = true;
      if(!this.forward) this.nextCardIndex += 1;
      const card = document.getElementById("currentCard") as HTMLImageElement;
      card.src = `../assets/${this.cards[this.nextCardIndex].name}.svg`;
      if(this.nextCardIndex > 0) {
        this.sharedService.addCard(this.cards[this.nextCardIndex - 1].name);
      }
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
    if (this.nextCardIndex > 0) {
      this.sharedService.addCard('standard-6');
    }
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

  resetBoard() {
    this.nextCardIndex = 0;
    this.forward = true;
    this.needsShuffle = false;
    this.cardFlipped = false;
    this.gameOver = false;
    this.shuffle();
  }

  ngOnDestroy() {
    this.resetSubscription?.unsubscribe();
    this.gameOverSubscription?.unsubscribe();
  }
}
