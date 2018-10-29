import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TrailsComponent } from './trails.component';
import { LayerService } from '../../services/layer/layer.service';
import { MapService } from '../../services/map/map.service';
import { SplashService } from '../../services/splash/splash.service';
import { StyleLayersService } from '../../services/styleLayers/styleLayers.service';
import { TrailsService } from '../../services/trails/trails.service';

describe('TrailsComponent', () =>
{
    let component: TrailsComponent;
    let fixture: ComponentFixture<TrailsComponent>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [TrailsComponent],
            providers: [
                LayerService,
                MapService,
                SplashService,
                StyleLayersService,
                TrailsService
            ]
        }).compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(TrailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () =>
        expect(component).toBeTruthy()
    );
});
