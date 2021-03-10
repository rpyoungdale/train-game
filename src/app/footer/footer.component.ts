import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  // @Input() usedCards: [];

  usedCards: any[];
  usedCardsSubscription: Subscription

  constructor(private service: SharedServiceService) { }

  ngOnInit(): void {
    this.usedCards = this.service.usedCards;
    this.usedCardsSubscription = this.subscribeToUsedCards();
  }

  subscribeToUsedCards() {
    return this.service.usedCardsSubject.subscribe(card => {
      var elem = document.createElement("img");
      elem.setAttribute("src", `../assets/${card}.svg`);
      elem.classList.add("used-card");
      document.getElementById("used-cards").appendChild(elem);
    });
  }

  ngOnDestroy(): void {
    this.usedCardsSubscription.unsubscribe();
  }
}
