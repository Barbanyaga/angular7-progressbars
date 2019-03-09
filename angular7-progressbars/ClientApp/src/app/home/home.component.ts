import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public values: YearData[];
  public max: number = 100;
  public current: number = 50;
  public yearData: YearData;

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<YearData[]>(baseUrl + 'api/values').subscribe(result => {
      this.values = result;
      this.yearData = result[0];
    }, error => console.error(error));
  }
}


interface YearData {
  year: number;
  circle1: CircleData;
  circle2: CircleData;
  categories: CategData[];
}

interface CircleData {
  value;
}

interface CategData {
  title: string;
  value: number;
  maxValue: number;
}


