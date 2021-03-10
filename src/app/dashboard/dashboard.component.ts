import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { ScoreSheetComponent } from '../score-sheet/score-sheet.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Output() newGameEmitter = new EventEmitter<boolean>(false);
  // @Input() usedCards;

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  openScoreCard(): void {
    this._bottomSheet.open(ScoreSheetComponent, {
      panelClass: 'custom-width'
    });
  }

  startNewGame(): void {
    debugger
    this.newGameEmitter.emit(true);
  }
}
