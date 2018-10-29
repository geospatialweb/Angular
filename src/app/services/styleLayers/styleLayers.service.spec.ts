import { TestBed } from '@angular/core/testing';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { MarkerDisplayService } from '../markerDisplay/markerDisplay.service';
import { StyleLayersService } from './styleLayers.service';

describe('StyleLayersService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                MapService,
                MarkerService,
                MarkerDisplayService,
                StyleLayersService
            ]
        });
    });

    it('should be created', () =>
    {
        const service: StyleLayersService = TestBed.get(StyleLayersService);
        expect(service).toBeTruthy();
    });
});
