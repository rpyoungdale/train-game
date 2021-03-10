import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  usedCardsSubject = new ReplaySubject<string>();
  usedCards = [];

  constructor() { }

  addCard(card): void {
    // this.usedCards.push(card);
    this.usedCardsSubject.next(card);
  }
}
