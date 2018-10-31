import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CanvasComponent } from './canvas.component';
import { LayerComponent } from '../layer/layer.component';
import { SplashComponent } from '../splash/splash.component';
import { TrailComponent } from '../trail/trail.component';
import { DataService } from '../../services/data/data.service';
import { LayerService } from '../../services/layer/layer.service';
import { LayerElementService } from '../../services/layerElement/layerElement.service';
import { LayerStyleService } from '../../services/layerStyle/layerStyle.service';
import { MapService } from '../../services/map/map.service';
import { MarkerService } from '../../services/marker/marker.service';
import { MarkerDisplayService } from '../../services/markerDisplay/markerDisplay.service';
import { SplashService } from '../../services/splash/splash.service';
import { TrailService } from '../../services/trail/trail.service';

describe('CanvasComponent', () =>
{
    let component: CanvasComponent;
    let fixture: ComponentFixture<CanvasComponent>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [
                CanvasComponent,
                LayerComponent,
                SplashComponent,
                TrailComponent
            ],
            imports: [
                HttpClientModule
            ],
            providers: [
                DataService,
                LayerService,
                LayerElementService,
                LayerStyleService,
                MapService,
                MarkerService,
                MarkerDisplayService,
                SplashService,
                TrailService
            ]
        }).compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(CanvasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () =>
        expect(component).toBeTruthy()
    );
});
