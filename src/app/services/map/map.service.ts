import { Injectable } from '@angular/core';
import { Map } from 'mapbox-gl';
import * as mapboxgl from 'mapbox-gl';
import { LayerService } from '../../services/layer/layer.service';
import { SplashService } from '../splash/splash.service';
import { config } from '../../../config/config';

@Injectable()
export class MapService
{
	map: Map;
	mapStyle: string = config.map.styles.default;
	mapOptions: object = {
		container: config.map.container,
		style:  this.mapStyle,
		center: config.map.center,
		zoom: config.map.zoom
	};

	navigationControlPosition: any = config.map.control.position;

	constructor(private layerService: LayerService,
				private splashService: SplashService)
	{
		(mapboxgl as any).accessToken = config.map.accessToken;
	}

	/* change between 'dark' and 'outdoors' map styles (basemaps) */
	changeStyle(): void
	{
		this.splashService.addSplash();

		this.mapStyle === config.map.styles.default ?
			this.mapStyle = config.map.styles.outdoors :
			this.mapStyle = config.map.styles.default;

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
