import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { ScoreSheetComponent } from '../score-sheet/score-sheet.component';
import { SettingsComponent } from '../settings/settings.component';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  @Output() newGameEmitter = new EventEmitter<boolean>(false);
  gameOverSubscription: Subscription;

  settingsOpen = false;
  isDarkMode = false;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private sharedService: SharedServiceService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.gameOverSubscription = this.sharedService.isGameOver.subscribe(isGameOver => {
      if(isGameOver) this.openScoreCard();
    });
  }

  openScoreCard(): void {
    this._bottomSheet.open(ScoreSheetComponent, {
      panelClass: 'penalty-table-sheet'
    });
  }

  startNewGame(): void {
    this.sharedService.newGame();
  }

  openSettings(): void {
    // const dialogRef = this.dialog.open(SettingsComponent, {
    //   height: '25vh',
    //   width: '40vh',
    //   data: {
    //     gameMode: this.sharedService.gameMode.getValue()
    //   }
    // });

    // dialogRef.afterClosed().subscribe(res => {
    //   if(res === 'tube' || res === 'metro') {
    //     this.sharedService.setGameMode(res);
    //   }
    // });
    const bottomSheetRef = this._bottomSheet.open(SettingsComponent, {
      panelClass: 'settings-sheet',
      data: {
        gameMode: this.sharedService.gameMode.getValue(),
        isDarkMode: this.isDarkMode
      }
    });

    bottomSheetRef.afterDismissed().subscribe(res => {
      if (res === 'tube' || res === 'metro') {
        this.sharedService.setGameMode(res);
      } else if (res === true || res === false) {
        this.isDarkMode = res;
        this.sharedService.toggleDarkMode(res);
      }
    });
  }

  ngOnDestroy() {
    this.gameOverSubscription?.unsubscribe();
  }
}
