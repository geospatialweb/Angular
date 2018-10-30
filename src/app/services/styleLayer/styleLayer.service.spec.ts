import { TestBed } from '@angular/core/testing';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { MarkerDisplayService } from '../markerDisplay/markerDisplay.service';
import { StyleLayerService } from './styleLayer.service';

describe('StyleLayerService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                MapService,
                MarkerService,
                MarkerDisplayService,
                StyleLayerService
            ]
        });
    });

    it('should be created', () =>
    {
        const service: StyleLayerService = TestBed.get(StyleLayerService);
        expect(service).toBeTruthy();
    });
});
