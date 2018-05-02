import { TestBed, inject } from '@angular/core/testing';
import { LayerService } from '../layer/layer.service';
import { SplashService } from './splash.service';

describe('SplashService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                LayerService,
                SplashService
            ]
        });
    });

    it('should be created', inject([SplashService], (service: SplashService) => {
        expect(service).toBeTruthy();
    }));
});
