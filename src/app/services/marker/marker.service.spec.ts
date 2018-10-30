import { TestBed } from '@angular/core/testing';
import { MapService } from '../map/map.service';
import { MarkerService } from './marker.service';
import { StyleLayerService } from '../styleLayer/styleLayer.service';

describe('MarkerService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                MapService,
                MarkerService,
                StyleLayerService
            ]
        });
    });

    it('should be created', () =>
    {
        const service: MarkerService = TestBed.get(MarkerService);
        expect(service).toBeTruthy();
    });
});
