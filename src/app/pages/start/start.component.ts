import { Component, OnInit } from '@angular/core';
import { FlashscoreService } from 'src/app/services/match-provider/implementation/flashscore/flashscore.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(
    private flashscoreService: FlashscoreService
  ) { }

  async ngOnInit() {
    console.log(await this.flashscoreService.findForToday())
  }

}
