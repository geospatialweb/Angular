import { TestBed, inject } from '@angular/core/testing';
import { DataService } from '../../services/data/data.service';
import { LayerService } from '../layer/layer.service';
import { MapService } from '../map/map.service';
import { SplashService } from '../splash/splash.service';

describe('DataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                DataService,
                LayerService,
                MapService,
                SplashService
            ]
        });
    });

    it('should be created', inject([DataService], (service: DataService) => {
        expect(service).toBeTruthy();
    }));
});
