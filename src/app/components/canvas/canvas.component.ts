import { Component, OnInit } from '@angular/core';
import { Map, NavigationControl } from 'mapbox-gl';
import { config } from '../../../config/config.config';
import { Config } from '../../interfaces/config.interface';
import { layerStyles } from '../../../config/layerStyles.config';
import { LayerStyles } from '../../interfaces/layerStyles.interface';
import { markers } from '../../../config/markers.config';
import { Markers } from '../../interfaces/markers.interface';
import { DataService } from '../../services/data/data.service';
import { LayerStyleService } from '../../services/layerStyle/layerStyle.service';
import { MapService } from '../../services/map/map.service';
import { MarkerService } from '../../services/marker/marker.service';
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
	private markers: Markers = markers;

	constructor(private dataService: DataService,
				private layerStyleService: LayerStyleService,
				private mapService: MapService,
				private markerService: MarkerService,
				private splashService: SplashService)
	{ }

	public ngOnInit(): void
	{
		/* instantiate map instance */
		this.mapService.map = new Map(this.mapService.mapOptions)
			.addControl(new NavigationControl(), this.mapService.navigationControlPosition)
			/* once markers and layers loaded, hide splash screen */
			.on('styledata', () =>
			{
				if (this.markerService.markers.length === Object.keys(this.markers).length &&
					this.layerStyleService.layerStyles.length === Object.keys(this.layerStyles).length &&
					this.splashService.splashElement.className === this.config.splashElement.className)
				{
					this.splashService.hideSplash();
				}
			})
			/* load markers and layers */
			.on('load', () =>
			{
				this.dataService.getMarkers();
				this.dataService.getLayerStyles();
			});
	}
}
