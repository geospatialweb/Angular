import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LayersComponent } from '../layers/layers.component';
import { LayerService } from '../../services/layer/layer.service';
import { MapCanvasComponent } from '../map-canvas/map-canvas.component';
import { MapService } from '../../services/map/map.service';
import { MarkerService } from '../../services/marker/marker.service';
import { MarkerDisplayService } from '../../services/markerDisplay/markerDisplay.service';
import { SplashComponent } from '../splash/splash.component';
import { SplashService } from '../../services/splash/splash.service';
import { TrailsComponent } from '../trails/trails.component';
import { TrailsService } from '../../services/trails/trails.service';

describe('MapCanvasComponent', () => {
    let component: MapCanvasComponent;
    let fixture: ComponentFixture<MapCanvasComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LayersComponent,
                MapCanvasComponent,
                SplashComponent,
                TrailsComponent
            ],
            imports: [
                HttpClientModule
            ],
            providers: [
                LayerService,
                MapService,
                MarkerService,
                MarkerDisplayService,
                SplashService,
                TrailsService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MapCanvasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});
