import { TestBed } from '@angular/core/testing';
import { LayerService } from '../layer/layer.service';
import { LayerElementService } from './layerElement.service';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { MarkerDisplayService } from '../markerDisplay/markerDisplay.service';
import { StyleLayerService } from '../styleLayer/styleLayer.service';

describe('LayerElementService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                LayerService,
                LayerElementService,
                MapService,
                MarkerService,
                MarkerDisplayService,
                StyleLayerService
            ]
        });
    });

    it('should be created', () =>
    {   const service: LayerElementService = TestBed.get(LayerElementService);
        expect(service).toBeTruthy();
    });
});
