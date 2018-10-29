import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CanvasComponent } from './canvas.component';
import { LayersComponent } from '../layers/layers.component';
import { SplashComponent } from '../splash/splash.component';
import { TrailsComponent } from '../trails/trails.component';
import { DataService } from '../../services/data/data.service';
import { LayerService } from '../../services/layer/layer.service';
import { LayerElementsService } from '../../services/layerElements/layerElements.service';
import { MapService } from '../../services/map/map.service';
import { MarkerService } from '../../services/marker/marker.service';
import { MarkerDisplayService } from '../../services/markerDisplay/markerDisplay.service';
import { SplashService } from '../../services/splash/splash.service';
import { StyleLayersService } from '../../services/styleLayers/styleLayers.service';
import { TrailsService } from '../../services/trails/trails.service';

describe('CanvasComponent', () =>
{
    let component: CanvasComponent;
    let fixture: ComponentFixture<CanvasComponent>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [
                CanvasComponent,
                LayersComponent,
                SplashComponent,
                TrailsComponent
            ],
            imports: [
                HttpClientModule
            ],
            providers: [
                DataService,
                LayerService,
                LayerElementsService,
                MapService,
                MarkerService,
                MarkerDisplayService,
                SplashService,
                StyleLayersService,
                TrailsService
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
