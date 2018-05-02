import { TestBed, inject } from '@angular/core/testing';
import { LayerService } from '../layer/layer.service';
import { MapService } from './map.service';
import { SplashService } from '../splash/splash.service';

describe('MapService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                LayerService,
                MapService,
                SplashService
            ]
        });
    });

    it('should be created', inject([MapService], (service: MapService) => {
        expect(service).toBeTruthy();
    }));
});
