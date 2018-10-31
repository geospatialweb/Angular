import { Component, OnInit } from '@angular/core';
import { Map, NavigationControl } from 'mapbox-gl';
import { config } from '../../../config/config.config';
import { Config } from '../../interfaces/config.interface';
import { styleLayers } from '../../../config/styleLayers.config';
import { StyleLayer } from '../../interfaces/styleLayer.interface';
import { DataService } from '../../services/data/data.service';
import { MapService } from '../../services/map/map.service';
import { SplashService } from '../../services/splash/splash.service';
import { StyleLayerService } from '../../services/styleLayer/styleLayer.service';

@Component({
	selector: 'app-canvas',
	styleUrls: ['./canvas.component.css'],
	templateUrl: './canvas.component.html'
})

export class CanvasComponent implements OnInit
{
	private config: Config = config;
	private styleLayers: StyleLayer = styleLayers;

	constructor(private dataService: DataService,
				private mapService: MapService,
				private splashService: SplashService,
				private styleLayerService: StyleLayerService)
	{ }

	public ngOnInit(): void
	{
		this.mapService.map = new Map(this.mapService.mapOptions)
			.addControl(new NavigationControl(), this.mapService.navigationControlPosition)
			.on('styledata', () =>
			{
				if (this.styleLayerService.styleLayers.length === Object.keys(this.styleLayers).length &&
					this.splashService.splashElement.className === this.config.splashElement.className)
				{
					this.splashService.hideSplash();
				}
			})
			.on('load', () =>
			{
				this.dataService.getMarkers();
				this.dataService.getStyleLayers();
			});
	}
}
