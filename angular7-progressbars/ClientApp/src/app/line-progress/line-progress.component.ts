import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-line-progress',
    templateUrl: './line-progress.component.html',
    styleUrls: ['./line-progress.component.scss']
})
/** line-progress component*/
export class LineProgressComponent {

  @Input() title: number;
  @Input() value: number;
  @Input() maxValue: number;

    /** line-progress ctor */
    constructor() {

  }


  getRandomGradient() {
    var color1 = Math.floor(0x1000000 * Math.random()).toString(16);
    var resultColor1 = '#' + ('000000' + color1).slice(-6);
    var color2 = Math.floor(0x1000000 * Math.random()).toString(16);
    var resultColor2 = '#' + ('000000' + color2).slice(-6);
    return "linear-gradient(-90deg, " + resultColor1 + ", " + resultColor2 + ")";
  }
}
