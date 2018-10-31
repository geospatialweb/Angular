import { TestBed } from '@angular/core/testing';
import { LayerService } from '../layer/layer.service';
import { LayerElementService } from './layerElement.service';
import { LayerStyleService } from '../layerStyle/layerStyle.service';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { MarkerDisplayService } from '../markerDisplay/markerDisplay.service';

describe('LayerElementService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                LayerService,
                LayerElementService,
                LayerStyleService,
                MapService,
                MarkerService,
                MarkerDisplayService
            ]
        });
    });

    it('should be created', () =>
    {   const service: LayerElementService = TestBed.get(LayerElementService);
        expect(service).toBeTruthy();
    });
});
