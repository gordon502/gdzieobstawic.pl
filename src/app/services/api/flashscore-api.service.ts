import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Match } from 'src/app/models/match';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlashscoreApiService {
  private readonly API_TARGET: string = '/flashscore.php';

  constructor(
    private httpClient: HttpClient
  ) { }

  public async findForToday(): Promise<Match[]> {
    const events = await firstValueFrom(this.httpClient.get<Match[]>(environment.API_URL + this.API_TARGET));

    return events;
  }
}
