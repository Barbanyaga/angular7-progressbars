import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { LineProgressComponent } from './line-progress.component';

let component: LineProgressComponent;
let fixture: ComponentFixture<LineProgressComponent>;

describe('line-progress component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ LineProgressComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(LineProgressComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
