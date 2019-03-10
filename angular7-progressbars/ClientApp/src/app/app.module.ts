import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { YearSelectorComponent } from './year-selector/year-selector.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { CircleProgressComponent } from './circle-progress/circle-progress.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    YearSelectorComponent,
    CircleProgressComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      "backgroundStrokeWidth": 0,
      "backgroundPadding": -5,
      "radius": 47,
      "space": -10,
      "unitsFontSize": "31",
      "outerStrokeGradient": true,
      "outerStrokeWidth": 7,
      "outerStrokeColor": "#9075B9",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "transparent",
      "innerStrokeWidth": 10,
      "title": "UI",
      "titleFontWeight": "600",
      "titleFontSize": "25",
      "subtitleFontSize": "18",
      "animateTitle": false,
      "animationDuration": 300,
      "showTitle": true,
      "showUnits": false,
      "showBackground": false,
      "showZeroOuterStroke": false,
      "showSubtitle":false
    }),
    HttpClientModule,
    RoundProgressModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
