import { TestBed } from '@angular/core/testing';
import { MapService } from '../../services/map/map.service';
import { StyleLayersService } from '../../services/styleLayers/styleLayers.service';
import { TrailsService } from './trails.service';

describe('TrailsService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                MapService,
                StyleLayersService,
                TrailsService]
        });
    });

    it('should be created', () =>
    {
        const service: TrailsService = TestBed.get(TrailsService);
        expect(service).toBeTruthy();
    });
});
