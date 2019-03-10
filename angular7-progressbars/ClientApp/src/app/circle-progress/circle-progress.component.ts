import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-circle-progress',
    templateUrl: './circle-progress.component.html',
    styleUrls: ['./circle-progress.component.scss']
})
/** circle-progress component*/
export class CircleProgressComponent {

  @Input() title: string;
  @Input() value: number;
  @Input() color: string = '#7CA8A8';

  getRandomGradient() {
    var color1 = Math.floor(0x1000000 * Math.random()).toString(16);
    var resultColor1 = '#' + ('000000' + color1).slice(-6);
    var color2 = Math.floor(0x1000000 * Math.random()).toString(16);
    var resultColor2 = '#' + ('000000' + color2).slice(-6);
    return "linear-gradient(-90deg, " + resultColor1 + ", " + resultColor2 + ")";
  }

    /** circle-progress ctor */
    constructor() {

    }
}
