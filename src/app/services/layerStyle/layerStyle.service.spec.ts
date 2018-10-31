import { TestBed } from '@angular/core/testing';
import { LayerStyleService } from '../layerStyle/layerStyle.service';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { MarkerDisplayService } from '../markerDisplay/markerDisplay.service';

describe('LayerStyleService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                LayerStyleService,
                MapService,
                MarkerService,
                MarkerDisplayService
            ]
        });
    });

    it('should be created', () =>
    {
        const service: LayerStyleService = TestBed.get(LayerStyleService);
        expect(service).toBeTruthy();
    });
});
