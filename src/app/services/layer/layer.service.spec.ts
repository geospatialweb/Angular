import { TestBed } from '@angular/core/testing';
import { LayerService } from './layer.service';
import { LayerStyleService } from '../layerStyle/layerStyle.service';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { MarkerDisplayService } from '../markerDisplay/markerDisplay.service';

describe('LayerService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                LayerService,
                LayerStyleService,
                MapService,
                MarkerService,
                MarkerDisplayService
            ]
        });
    });

    it('should be created', () =>
    {
        const service: LayerService = TestBed.get(LayerService);
        expect(service).toBeTruthy();
    });
});
