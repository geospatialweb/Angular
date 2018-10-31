import { TestBed } from '@angular/core/testing';
import { LayerStyleService } from '../layerStyle/layerStyle.service';
import { MapService } from '../map/map.service';
import { TrailService } from './trail.service';

describe('TrailService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                LayerStyleService,
                MapService,
                TrailService
            ]
        });
    });

    it('should be created', () =>
    {
        const service: TrailService = TestBed.get(TrailService);
        expect(service).toBeTruthy();
    });
});
