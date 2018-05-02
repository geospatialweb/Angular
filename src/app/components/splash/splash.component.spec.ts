import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SplashComponent } from './splash.component';

describe('SplashComponent', () => {
    let component: SplashComponent;
    let fixture: ComponentFixture<SplashComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SplashComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SplashComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});