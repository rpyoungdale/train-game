import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.scss']
})
export class GameSetupComponent implements OnInit {

  constructor(private router: RouterModule) { }

  ngOnInit(): void {
  }

}
