import { TestBed, inject } from '@angular/core/testing';
import { MapService } from '../../services/map/map.service';
import { TrailsService } from './trails.service';

describe('TrailsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MapService,
                TrailsService]
        });
    });

    it('should be created', inject([TrailsService], (service: TrailsService) => {
        expect(service).toBeTruthy();
    }));
});
