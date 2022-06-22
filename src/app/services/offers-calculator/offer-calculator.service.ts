import { Injectable } from '@angular/core';
import { Offer } from 'src/app/models/offer';
import { SelectedMatch } from 'src/app/models/selected-match';

@Injectable({
  providedIn: 'root'
})
export class OfferCalculatorService {

  constructor() { }

  public prepareOffersFromSelectedMatches(selectedMatches: SelectedMatch[]): Offer[] {
    const bookmakers = this.extractUniqueBookmakers(selectedMatches);

    const offers = bookmakers.map(b => new Offer(b, 1.0));

    for (const selectedMatch of selectedMatches) {
      for (const stake of selectedMatch.match.stakes) {
        if (bookmakers.includes(stake.bookmaker) === false) {
          continue;
        }

        for (const offer of offers) {
          if (offer.bookmaker !== stake.bookmaker) {
            continue;
          }

          offer.stake *= selectedMatch.bet === SelectedMatch.HOME_BET 
            ? stake.home
            : (selectedMatch.bet === SelectedMatch.DRAW_BET ? stake.draw : stake.away)
        }
      }
    }
    
    return offers.sort((a, b) => a.stake > b.stake ? -1 : 1);
  }

  private extractUniqueBookmakers(selectedMatches: SelectedMatch[]): string[] {
    if (selectedMatches.length === 0) {
      return [];
    }
    
    const bookmakersCounter: any = {};

    for (const selectedMatch of selectedMatches) {
      for (const stake of selectedMatch.match.stakes) {
        if (stake.bookmaker in bookmakersCounter) {
          bookmakersCounter[stake.bookmaker] += 1;
        } else {
          bookmakersCounter[stake.bookmaker] = 1;
        }
      }
    }

    const values: number[] = Object.values(bookmakersCounter);
    const mostMatches = Math.max(...values);

    if (mostMatches !== selectedMatches.length) {
      return [];
    }

    const eliglibleBookmakers = [];

    for (const bookmaker in bookmakersCounter) {
      if (bookmakersCounter[bookmaker] === mostMatches) {
        eliglibleBookmakers.push(bookmaker);
      }
    }

    return eliglibleBookmakers;
  }
}
