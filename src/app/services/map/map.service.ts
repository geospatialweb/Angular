import { Injectable } from '@angular/core';
import { Config } from '../../interfaces/config.interface';
import { config } from '../../../config/config';
import { LngLatLike, Map } from 'mapbox-gl';
import * as mapboxgl from 'mapbox-gl';
import { LayerService } from '../../services/layer/layer.service';
import { SplashService } from '../splash/splash.service';

@Injectable()
export class MapService
{
	private mapCanvas: Config = config.mapCanvas;
	private mapStyles: Config = config.mapCanvas.styles;
	private navigationControl: Config = config.mapCanvas.navigationControl;

	map: Map;
	mapStyle: string = this.mapStyles.default;
	mapOptions: object = {
		container: this.mapCanvas.container,
		style:  this.mapStyle,
		center: this.mapCanvas.center as LngLatLike,
		zoom: this.mapCanvas.zoom
	};

	navigationControlPosition: any = this.navigationControl.position;

	constructor(private layerService: LayerService,
				private splashService: SplashService)
	{
		(mapboxgl as any).accessToken = this.mapCanvas.accessToken;
	}

	/* change between 'dark' and 'outdoors' map styles (basemaps) */
	changeStyle(): void
	{
		this.splashService.addSplash();

		this.mapStyle === this.mapStyles.default ?
			this.mapStyle = this.mapStyles.outdoors :
			this.mapStyle = this.mapStyles.default;

		this.map.setStyle(this.mapStyle);

		/* add layers to new map style after delay for aesthetic purposes */
		this.layerService.layers.map((layer: any, index: number) =>
			setTimeout(() =>
			{
				this.map.addLayer(layer);

				if (layer.layout.visibility === 'visible')
					this.map.setLayoutProperty(layer.id, 'visibility', 'visible');

				if (index === this.layerService.layers.length - 1)
					this.splashService.removeSplash();

				return true;

			}, 1000)
		);
	}
}
