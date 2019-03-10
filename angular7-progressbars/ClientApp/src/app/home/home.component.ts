import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../../services/web.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly PAGE_SIZE: number = 8;
  public values: YearData[];
  public max: number = 100;
  public current: number = 50;
  public yearData: YearData;
  public pagedList: PageCategs[];

  http: HttpClient;
  baseUrl: string;
  public fakeArray = new Array(4);
    webService: WebService;


  constructor(webService: WebService) {
    this.webService = webService;
    this.onSelected(2018);
  }


  onSelected(year: number) {
    this.webService.getYearData(year).subscribe(result => {
      this.values = result;
      this.yearData = result[0];
      this.createPagedList(this.yearData.categories);
    }, error => console.error(error));
  }
  createPagedList(categories: CategData[]): any {
    let page = categories;
    let res: PageCategs[] = new Array();
    while (categories.length > 0) {
      page = categories.slice(0, this.PAGE_SIZE);
      categories = categories.slice(this.PAGE_SIZE);
      res.push(new PageCategs(page));
    } ;

    this.pagedList = res;
  }
}







class PageCategs {
  public categories: CategData[];

  constructor(categs: CategData[]) {
    this.categories = categs;
  }
}

