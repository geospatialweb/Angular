import { TestBed, inject } from '@angular/core/testing';
import { LayerElementsService } from './layerElements.service';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { MarkerDisplayService } from '../markerDisplay/markerDisplay.service';

describe('LayerElementsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                LayerElementsService,
                MapService,
                MarkerService,
                MarkerDisplayService
            ]
        });
    });

    it('should be created', inject([LayerElementsService], (service: LayerElementsService) => {
        expect(service).toBeTruthy();
    }));
});
