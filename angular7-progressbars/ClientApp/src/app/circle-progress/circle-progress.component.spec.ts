import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CircleProgressComponent } from './circle-progress.component';

let component: CircleProgressComponent;
let fixture: ComponentFixture<CircleProgressComponent>;

describe('circle-progress component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CircleProgressComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(CircleProgressComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
