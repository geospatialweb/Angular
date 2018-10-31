import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TrailComponent } from './trail.component';
import { LayerService } from '../../services/layer/layer.service';
import { LayerStyleService } from '../../services/layerStyle/layerStyle.service';
import { MapService } from '../../services/map/map.service';
import { SplashService } from '../../services/splash/splash.service';
import { TrailService } from '../../services/trail/trail.service';

describe('TrailComponent', () =>
{
    let component: TrailComponent;
    let fixture: ComponentFixture<TrailComponent>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [TrailComponent],
            providers: [
                LayerService,
                LayerStyleService,
                MapService,
                SplashService,
                TrailService
            ]
        }).compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(TrailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () =>
        expect(component).toBeTruthy()
    );
});
