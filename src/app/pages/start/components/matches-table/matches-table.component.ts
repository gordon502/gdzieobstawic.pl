import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Match } from 'src/app/models/match';
import { SelectedMatch } from 'src/app/models/selected-match';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.scss']
})
export class MatchesTableComponent implements OnInit {
  @Input() matches!: Match[];

  @Output() matchSelectedEvent = new EventEmitter<SelectedMatch>();

  constructor() { }

  ngOnInit(): void {
  }

  selectMatch(match: Match, bet: string) {
    if ([SelectedMatch.HOME_BET, SelectedMatch.DRAW_BET, SelectedMatch.AWAY_BET].includes(bet) === false) {
      return;
    }

    const meanRate = bet === SelectedMatch.HOME_BET
      ? match.meanHome
      : (
        bet === SelectedMatch.DRAW_BET
          ? match.meanDraw
          : match.meanAway
      );

    this.matchSelectedEvent.emit(new SelectedMatch(bet, meanRate, match));
  }
}
