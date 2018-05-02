import { TestBed, inject } from '@angular/core/testing';
import { LayerService } from '../layer/layer.service';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { MarkerDisplayService } from './markerDisplay.service';
import { SplashService } from '../splash/splash.service';

describe('MarkerDisplayService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                LayerService,
                MapService,
                MarkerService,
                MarkerDisplayService,
                SplashService
            ]
        });
    });

    it('should be created', inject([MarkerDisplayService], (service: MarkerDisplayService) => {
        expect(service).toBeTruthy();
    }));
});
