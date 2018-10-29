import { TestBed } from '@angular/core/testing';
import { LayerService } from '../layer/layer.service';
import { LayerElementsService } from './layerElements.service';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { MarkerDisplayService } from '../markerDisplay/markerDisplay.service';
import { StyleLayersService } from '../styleLayers/styleLayers.service';

describe('LayerElementsService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                LayerService,
                LayerElementsService,
                MapService,
                MarkerService,
                MarkerDisplayService,
                StyleLayersService
            ]
        });
    });

    it('should be created', () =>
    {   const service: LayerElementsService = TestBed.get(LayerElementsService);
        expect(service).toBeTruthy();
    });
});
