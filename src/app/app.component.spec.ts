import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayersComponent } from './components/layers/layers.component';
import { LayerService } from './services/layer/layer.service';
import { MapService } from './services/map/map.service';
import { MapCanvasComponent } from './components/map-canvas/map-canvas.component';
import { MarkerService } from './services/marker/marker.service';
import { MarkerDisplayService } from './services/markerDisplay/markerDisplay.service';
import { SplashComponent } from './components/splash/splash.component';
import { SplashService } from './services/splash/splash.service';
import { TrailsComponent } from './components/trails/trails.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                HeaderComponent,
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
                SplashService
            ]
        }).compileComponents();
    }));

    it('should create app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
