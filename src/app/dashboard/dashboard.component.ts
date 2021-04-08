import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Subscription } from 'rxjs';

import { ScoreSheetComponent } from '../score-sheet/score-sheet.component';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  @Output() newGameEmitter = new EventEmitter<boolean>(false);
  gameOverSubscription: Subscription;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private sharedService: SharedServiceService,
  ) { }

  ngOnInit(): void {
    this.gameOverSubscription = this.sharedService.isGameOver.subscribe(isGameOver => {
      if(isGameOver) this.openScoreCard();
    });
  }

  openScoreCard(): void {
    this._bottomSheet.open(ScoreSheetComponent, {
      panelClass: 'custom-width'
    });
  }

  startNewGame(): void {
    this.sharedService.newGame();
  }

  ngOnDestroy() {
    this.gameOverSubscription?.unsubscribe();
  }
}
