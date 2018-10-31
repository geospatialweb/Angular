import { TestBed } from '@angular/core/testing';
import { LayerStyleService } from '../layerStyle/layerStyle.service';
import { MapService } from '../map/map.service';
import { MarkerService } from './marker.service';

describe('MarkerService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                LayerStyleService,
                MapService,
                MarkerService
            ]
        });
    });

    it('should be created', () =>
    {
        const service: MarkerService = TestBed.get(MarkerService);
        expect(service).toBeTruthy();
    });
});
