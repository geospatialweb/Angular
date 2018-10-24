import { TestBed, inject } from '@angular/core/testing';
import { LayerService } from '../layer/layer.service';
import { MapService } from '../../services/map/map.service';
import { MarkerService } from '../../services/marker/marker.service';
import { MarkerDisplayService } from '../../services/markerDisplay/markerDisplay.service';
import { SplashService } from './splash.service';

describe('SplashService', () => {
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

    it('should be created', inject([SplashService], (service: SplashService) => {
        expect(service).toBeTruthy();
    }));
});
