import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  usedCardsSubject = new ReplaySubject<string>();
  usedCards = [];

  resetGame = new BehaviorSubject<boolean>(false);
  isGameOver = new BehaviorSubject<boolean>(false);
  isDarkMode = new BehaviorSubject<boolean>(false);
  gameMode = new BehaviorSubject<string>('metro');

  constructor() { }

  addCard(card): void {
    this.usedCardsSubject.next(card);
  }

  newGame(): void {
    this.resetGame.next(true);
  }

  gameOver(): void {
    this.isGameOver.next(true);
  }

  toggleDarkMode(isDarkMode): void {
    (document.getElementById('coffee-image') as HTMLImageElement).src = isDarkMode ? '../../assets/akar-icons_coffee.svg' : '../../assets/light-akar-icons_coffee.svg';
    const bodyElem = document.querySelector('body');
    bodyElem.style.backgroundColor = isDarkMode ? '#1b1b1b' : 'white';
    document.querySelectorAll('h3').forEach(element => {
      element.style.color = isDarkMode ? 'white' : 'black';
    });
    (document.getElementById('metro-logo') as HTMLImageElement).src = isDarkMode ? '../../assets/metro-logo-dark.svg' : '../../assets/metro-logo.svg';
    document.getElementById('gameModeName').style.color = isDarkMode ? 'white' : 'black';
    document.getElementById('coffee-a-tag').style.color = isDarkMode ? 'white' : 'black';
  }

  setGameMode(gameMode: string): void {
    this.gameMode.next(gameMode);
  }
}
