import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Match } from 'src/app/models/match';
import { FlashscoreApiService } from 'src/app/services/api/flashscore-api.service';
import { TodayMatchProvider } from '../../today-match-provider';

@Injectable({
  providedIn: 'root'
})
export class FlashscoreService implements TodayMatchProvider {

  constructor(
    private flashscoreApi: FlashscoreApiService
  ) { }

  public async findForToday(): Promise<Match[]> {
    return await this.flashscoreApi.findForToday();
  }
}
