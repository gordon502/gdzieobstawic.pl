import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Match } from 'src/app/models/match';
import { SelectedMatch } from 'src/app/models/selected-match';
import { polish } from 'plugin/datatable/language/polish';

@Component({
  selector: 'app-matches-table',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.scss']
})
export class MatchesTableComponent implements OnInit {
  @Input() matches!: Match[];

  @Output() matchSelectedEvent = new EventEmitter<SelectedMatch>();

  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      language: polish
    }
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
