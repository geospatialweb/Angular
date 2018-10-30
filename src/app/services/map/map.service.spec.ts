import { TestBed } from '@angular/core/testing';
import { LayerService } from '../layer/layer.service';
import { MapService } from './map.service';
import { SplashService } from '../splash/splash.service';
import { StyleLayerService } from '../styleLayer/styleLayer.service';

describe('MapService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                LayerService,
                MapService,
                SplashService,
                StyleLayerService
            ]
        });
    });

    it('should be created', () =>
    {
        const service: MapService = TestBed.get(MapService);
        expect(service).toBeTruthy();
    });
});
