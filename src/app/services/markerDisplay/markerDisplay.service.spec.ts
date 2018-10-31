import { TestBed } from '@angular/core/testing';
import { LayerService } from '../layer/layer.service';
import { LayerStyleService } from '../layerStyle/layerStyle.service';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { MarkerDisplayService } from './markerDisplay.service';
import { SplashService } from '../splash/splash.service';

describe('MarkerDisplayService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                LayerService,
                LayerStyleService,
                MapService,
                MarkerService,
                MarkerDisplayService,
                SplashService
            ]
        });
    });

    it('should be created', () =>
    {
        const service: MarkerDisplayService = TestBed.get(MarkerDisplayService);
        expect(service).toBeTruthy();
    });
});
