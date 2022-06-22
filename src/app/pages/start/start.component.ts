import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match';
import { FlashscoreService } from 'src/app/services/match-provider/implementation/flashscore/flashscore.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  matches: Match[] = [];

  constructor(
    private flashscoreService: FlashscoreService
  ) { }

  async ngOnInit() {
    this.matches = await this.flashscoreService.findForToday();
  }

}
