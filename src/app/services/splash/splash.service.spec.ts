import { TestBed } from '@angular/core/testing';
import { LayerService } from '../layer/layer.service';
import { LayerElementsService } from '../layerElements/layerElements.service';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { MarkerDisplayService } from '../markerDisplay/markerDisplay.service';
import { SplashService } from './splash.service';
import { StyleLayersService } from '../styleLayers/styleLayers.service';

describe('SplashService', () =>
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
                SplashService,
                StyleLayersService
            ]
        });
    });

    it('should be created', () =>
    {
        const service: SplashService = TestBed.get(SplashService);
        expect(service).toBeTruthy();
    });
});
