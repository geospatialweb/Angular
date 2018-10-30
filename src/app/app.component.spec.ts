import { async, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { HeaderComponent } from './components/header/header.component';
import { LayerComponent } from './components/layer/layer.component';
import { SplashComponent } from './components/splash/splash.component';
import { TrailComponent } from './components/trail/trail.component';
import { DataService } from './services/data/data.service';
import { LayerService } from './services/layer/layer.service';
import { LayerElementService } from './services/layerElement/layerElement.service';
import { MapService } from './services/map/map.service';
import { MarkerService } from './services/marker/marker.service';
import { MarkerDisplayService } from './services/markerDisplay/markerDisplay.service';
import { SplashService } from './services/splash/splash.service';
import { StyleLayerService } from './services/styleLayer/styleLayer.service';
import { TrailService } from './services/trail/trail.service';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                CanvasComponent,
                HeaderComponent,
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
                MapService,
                MarkerService,
                MarkerDisplayService,
                SplashService,
                StyleLayerService,
                TrailService
            ]
        }).compileComponents();
    }));

    it('should create app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
