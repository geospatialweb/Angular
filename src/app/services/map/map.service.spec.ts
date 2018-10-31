import { TestBed } from '@angular/core/testing';
import { LayerService } from '../layer/layer.service';
import { LayerStyleService } from '../layerStyle/layerStyle.service';
import { MapService } from './map.service';
import { SplashService } from '../splash/splash.service';

describe('MapService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                LayerService,
                LayerStyleService,
                MapService,
                SplashService
            ]
        });
    });

    it('should be created', () =>
    {
        const service: MapService = TestBed.get(MapService);
        expect(service).toBeTruthy();
    });
});
