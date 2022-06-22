import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match';
import { Offer } from 'src/app/models/offer';
import { SelectedMatch } from 'src/app/models/selected-match';
import { FlashscoreService } from 'src/app/services/match-provider/implementation/flashscore/flashscore.service';
import { OfferCalculatorService } from 'src/app/services/offers-calculator/offer-calculator.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  matches: Match[] = [];

  selectedMatches: SelectedMatch[] = [];

  comboRate: number = 1.0;

  offers: Offer[] = [];

  modalActive: boolean = false;

  constructor(
    private flashscoreService: FlashscoreService,
    private offerCalculatorService: OfferCalculatorService
  ) { }

  async ngOnInit() {
    this.matches = await this.flashscoreService.findForToday();
  }

  handleMatchSelect(selectedMatch: SelectedMatch) {
      this.removeMatch(selectedMatch);

      this.selectedMatches.push(selectedMatch);

      this.recalculateComboRate();
  }

  handleRemoveMatch(selectedMatch: SelectedMatch) {
    this.removeMatch(selectedMatch);

    this.recalculateComboRate();
  }
  
  handleCalculateOffers() {
    this.offers = this.offerCalculatorService.prepareOffersFromSelectedMatches(this.selectedMatches);

    this.modalActive = true;
  }

  handleCloseModal() {
    this.modalActive = false;
  }

  private removeMatch(selectedMatch: SelectedMatch) {
    this.selectedMatches = this.selectedMatches
        .filter(s => s.match.homeTeam !== selectedMatch.match.homeTeam && s.match.awayTeam !== selectedMatch.match.awayTeam);
  }

  private recalculateComboRate() {
    let combo: number = 1;
      for (const selected of this.selectedMatches) {
        combo *= selected.meanRate;
      }

      this.comboRate = combo;
  }
}
