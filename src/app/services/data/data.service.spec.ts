import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { DataService } from '../data/data.service';
import { LayerService } from '../layer/layer.service';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { SplashService } from '../splash/splash.service';
import { StyleLayersService } from '../styleLayers/styleLayers.service';

describe('DataService', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                HttpClient,
                HttpHandler,
                DataService,
                LayerService,
                MapService,
                MarkerService,
                SplashService,
                StyleLayersService
            ]
        });
    });

    it('should be created', () =>
    {
        const service: DataService = TestBed.get(DataService);
        expect(service).toBeTruthy();
    });
});
