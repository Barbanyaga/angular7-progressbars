import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-year-selector',
  templateUrl: './year-selector.component.html',
  styleUrls: ['./year-selector.component.scss']
})
/** year-selector component*/
export class YearSelectorComponent {

  public Values: number[] = [2016, 2017, 2018, 2019, 2020];
  @Output() selected = new EventEmitter<number>();

  /** year-selector ctor */
  constructor() {

  }

  onSelect(year: number) {
    this.Values = [year - 2, year - 1, year, year + 1, year + 2];
    this.selected.emit(year);
  }
}


