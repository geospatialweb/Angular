import { async, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { HeaderComponent } from './components/header/header.component';
import { LayersComponent } from './components/layers/layers.component';
import { SplashComponent } from './components/splash/splash.component';
import { TrailsComponent } from './components/trails/trails.component';
import { DataService } from './services/data/data.service';
import { LayerService } from './services/layer/layer.service';
import { LayerElementsService } from './services/layerElements/layerElements.service';
import { MapService } from './services/map/map.service';
import { MarkerService } from './services/marker/marker.service';
import { MarkerDisplayService } from './services/markerDisplay/markerDisplay.service';
import { SplashService } from './services/splash/splash.service';
import { StyleLayersService } from './services/styleLayers/styleLayers.service';
import { TrailsService } from './services/trails/trails.service';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                CanvasComponent,
                HeaderComponent,
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

    it('should create app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
