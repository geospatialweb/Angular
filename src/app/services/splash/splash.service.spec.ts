import { TestBed } from '@angular/core/testing';
import { LayerService } from '../layer/layer.service';
import { LayerElementService } from '../layerElement/layerElement.service';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { MarkerDisplayService } from '../markerDisplay/markerDisplay.service';
import { SplashService } from './splash.service';
import { StyleLayerService } from '../styleLayer/styleLayer.service';

describe('SplashService', () =>
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
                SplashService,
                StyleLayerService
            ]
        });
    });

    it('should be created', () =>
    {
        const service: SplashService = TestBed.get(SplashService);
        expect(service).toBeTruthy();
    });
});
