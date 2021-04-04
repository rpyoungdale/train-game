import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  usedCardsSubject = new ReplaySubject<string>();
  usedCards = [];

  resetGame = new BehaviorSubject<boolean>(false);

  constructor() { }

  addCard(card): void {
    this.usedCardsSubject.next(card);
  }

  newGame() {
    this.resetGame.next(true);
  }
}
