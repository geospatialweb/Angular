import { TestBed } from '@angular/core/testing';
import { MapService } from '../map/map.service';
import { StyleLayerService } from '../styleLayer/styleLayer.service';
import { TrailService } from './trail.service';

describe('TrailService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                MapService,
                StyleLayerService,
                TrailService]
        });
    });

    it('should be created', () =>
    {
        const service: TrailService = TestBed.get(TrailService);
        expect(service).toBeTruthy();
    });
});
