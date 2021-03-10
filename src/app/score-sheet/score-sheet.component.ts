import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-score-sheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.scss']
})
export class ScoreSheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<ScoreSheetComponent>) { }

  ngOnInit(): void {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
