import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  checked = false;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<SettingsComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data
  ) { }

  ngOnInit(): void {
    this.checked = this.data.isDarkMode;
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  changeMode(gameMode: string): void {
    this._bottomSheetRef.dismiss(gameMode);
  }

  toggleDarkMode(e): void {
    this._bottomSheetRef.dismiss(e.checked);
  }
}
