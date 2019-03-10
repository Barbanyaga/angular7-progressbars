import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WebService {
  http: HttpClient;
  baseUrl: string;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  /**
   * Get info by year
   * @param year
   */
  getYearData(year: number): Observable<YearData[]> {
    return this.http.get<YearData[]>(this.baseUrl + 'api/values/byYear?year=' + year);
  }

}
