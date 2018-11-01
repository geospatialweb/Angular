import { Component, OnInit } from '@angular/core';
import { Map, NavigationControl } from 'mapbox-gl';
import { config } from '../../../config/config.config';
import { Config } from '../../interfaces/config.interface';
import { layerStyles } from '../../../config/layerStyles.config';
import { LayerStyles } from '../../interfaces/layerStyles.interface';
import { DataService } from '../../services/data/data.service';
import { LayerStyleService } from '../../services/layerStyle/layerStyle.service';
import { MapService } from '../../services/map/map.service';
import { SplashService } from '../../services/splash/splash.service';

@Component({
	selector: 'app-canvas',
	styleUrls: ['./canvas.component.css'],
	templateUrl: './canvas.component.html'
})

export class CanvasComponent implements OnInit
{
	private config: Config = config;
	private layerStyles: LayerStyles = layerStyles;

	constructor(private dataService: DataService,
				private layerStyleService: LayerStyleService,
				private mapService: MapService,
				private splashService: SplashService)
	{ }

	public ngOnInit(): void
	{
		this.mapService.map = new Map(this.mapService.mapOptions)
			.addControl(new NavigationControl(), this.mapService.navigationControlPosition)
			.on('styledata', () =>
			{
				if (this.layerStyleService.layerStyles.length === Object.keys(this.layerStyles).length &&
					this.splashService.splashElement.className === this.config.splashElement.className)
				{
					this.splashService.hideSplash();
				}
			})
			.on('load', () =>
			{
				this.dataService.getLayerStyles();
				this.dataService.getMarkers();
			});
	}
}
