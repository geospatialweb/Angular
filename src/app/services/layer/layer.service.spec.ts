import { TestBed } from '@angular/core/testing';
import { LayerService } from './layer.service';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { MarkerDisplayService } from '../markerDisplay/markerDisplay.service';
import { StyleLayersService } from '../styleLayers/styleLayers.service';

describe('LayerService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                LayerService,
                MapService,
                MarkerService,
                MarkerDisplayService,
                StyleLayersService
            ]
        });
    });

    it('should be created', () =>
    {
        const service: LayerService = TestBed.get(LayerService);
        expect(service).toBeTruthy();
    });
});
