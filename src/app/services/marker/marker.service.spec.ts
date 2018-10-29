import { TestBed } from '@angular/core/testing';
import { MapService } from '../map/map.service';
import { MarkerService } from './marker.service';
import { StyleLayersService } from '../styleLayers/styleLayers.service';

describe('MarkerService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                MapService,
                MarkerService,
                StyleLayersService
            ]
        });
    });

    it('should be created', () =>
    {
        const service: MarkerService = TestBed.get(MarkerService);
        expect(service).toBeTruthy();
    });
});
