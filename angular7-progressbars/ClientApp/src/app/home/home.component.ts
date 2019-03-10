import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public values: YearData[];
  public max: number = 100;
  public current: number = 50;
  public yearData: YearData;
  http: HttpClient;
  baseUrl: string;

  getRandomColor() {
    var color1 = Math.floor(0x1000000 * Math.random()).toString(16);
    var resultColor1 = '#' + ('000000' + color1).slice(-6);
    var color2 = Math.floor(0x1000000 * Math.random()).toString(16);
    var resultColor2 = '#' + ('000000' + color2).slice(-6);
    return "linear-gradient(-90deg, " + resultColor1 + ", " + resultColor2 + ")";
  }

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.onSelected(2018);
  }

  onSelected(year: number) {
    this.http.get<YearData[]>(this.baseUrl + 'api/values/byYear?year=' + year).subscribe(result => {
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
  name;
  value;
  maxValue;
}

interface CategData {
  title: string;
  value: number;
  maxValue: number;
}


