import { TestBed } from '@angular/core/testing';
import { LayerService } from '../layer/layer.service';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { MarkerDisplayService } from './markerDisplay.service';
import { SplashService } from '../splash/splash.service';
import { StyleLayerService } from '../styleLayer/styleLayer.service';

describe('MarkerDisplayService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                LayerService,
                MapService,
                MarkerService,
                MarkerDisplayService,
                SplashService,
                StyleLayerService
            ]
        });
    });

    it('should be created', () =>
    {
        const service: MarkerDisplayService = TestBed.get(MarkerDisplayService);
        expect(service).toBeTruthy();
    });
});
