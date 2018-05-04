import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { HeaderComponent } from './components/header/header.component';
import { LayersComponent } from './components/layers/layers.component';
import { LayerService } from './services/layer/layer.service';
import { MapService } from './services/map/map.service';
import { MarkerService } from './services/marker/marker.service';
import { MarkerDisplayService } from './services/markerDisplay/markerDisplay.service';
import { SplashComponent } from './components/splash/splash.component';
import { SplashService } from './services/splash/splash.service';
import { TrailsComponent } from './components/trails/trails.component';
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
                LayerService,
                MapService,
                MarkerService,
                MarkerDisplayService,
                SplashService,
                TrailsService
            ]
        }).compileComponents();
    }));

    it('should create app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
