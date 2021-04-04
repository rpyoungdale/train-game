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

  cardCount = 0;
  spotsRemaining = 23;

  constructor(private service: SharedServiceService) { }

  ngOnInit(): void {
    this.usedCards = this.service.usedCards;
    // this.cardCount = this.service.usedCards.length;
    this.usedCardsSubscription = this.subscribeToUsedCards();
  }

  subscribeToUsedCards() {
    return this.service.usedCardsSubject.subscribe(card => {
      this.cardCount += 1;
      if(card !== 'free') {
        this.spotsRemaining -= 1;
      }
      var elem = document.createElement("img");
      elem.setAttribute("src", `../assets/${card}.svg`);
      elem.style.height = "60px";
      elem.style.marginLeft = "5px";
      elem.style.marginRight = "5px";
      elem.style.paddingBottom = "10px";
      elem.style.display = "inline-block";
      document.getElementById("used-cards").appendChild(elem);
    });
  }

  ngOnDestroy(): void {
    this.usedCardsSubscription.unsubscribe();
  }
}
