import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LayersComponent } from './layers.component';
import { LayerService } from '../../services/layer/layer.service';
import { MapService } from '../../services/map/map.service';
import { MarkerService } from '../../services/marker/marker.service';
import { MarkerDisplayService } from '../../services/markerDisplay/markerDisplay.service';
import { SplashService } from '../../services/splash/splash.service';

describe('LayersComponent', () => {
    let component: LayersComponent;
    let fixture: ComponentFixture<LayersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LayersComponent],
            providers: [
                LayerService,
                MapService,
                MarkerService,
                MarkerDisplayService,
                SplashService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LayersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});
