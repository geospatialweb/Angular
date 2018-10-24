import { TestBed, inject } from '@angular/core/testing';
import { LayerService } from './layer.service';
import { MapService } from '../../services/map/map.service';
import { MarkerService } from '../../services/marker/marker.service';
import { MarkerDisplayService } from '../../services/markerDisplay/markerDisplay.service';

describe('LayerService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                LayerService,
                MapService,
                MarkerService,
                MarkerDisplayService
            ]
        });
    });

    it('should be created', inject([LayerService], (service: LayerService) => {
        expect(service).toBeTruthy();
    }));
});
