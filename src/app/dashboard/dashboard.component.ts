import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { ScoreSheetComponent } from '../score-sheet/score-sheet.component';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Output() newGameEmitter = new EventEmitter<boolean>(false);

  constructor(
    private _bottomSheet: MatBottomSheet,
    private sharedService: SharedServiceService,
  ) { }

  ngOnInit(): void {
  }

  openScoreCard(): void {
    this._bottomSheet.open(ScoreSheetComponent, {
      panelClass: 'custom-width'
    });
  }

  startNewGame(): void {
    this.sharedService.newGame();
  }
}
