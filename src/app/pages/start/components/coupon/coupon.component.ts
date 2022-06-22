import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectedMatch } from 'src/app/models/selected-match';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {
  @Input() selectedMatches!: SelectedMatch[];

  @Input() comboRate!: Number;

  @Output() removeMatchEvent: EventEmitter<SelectedMatch> = new EventEmitter<SelectedMatch>();

  constructor() { }

  ngOnInit(): void {
  }

  removeMatch(selected: SelectedMatch) {
    this.removeMatchEvent.emit(selected);
  }
}
