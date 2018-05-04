import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { canvas } from '../../../config/canvas.config';
import { Canvas } from '../../interfaces/canvas.interface';
import { LayerService } from '../../services/layer/layer.service';
import { SplashService } from '../splash/splash.service';

@Injectable()
export class MapService
{
	private canvas: Canvas = canvas;
	private navigationControl: Canvas = canvas.navigationControl;
	private styles: Canvas = canvas.styles;

	map: mapboxgl.Map;
	mapStyle: string = this.styles.default;
	mapOptions: object = {
		container: this.canvas.container,
		style:  this.mapStyle,
		center: this.canvas.center as mapboxgl.LngLatLike,
		zoom: this.canvas.zoom
	};

	navigationControlPosition: any = this.navigationControl.position;

	constructor(private layerService: LayerService,
				private splashService: SplashService)
	{
		(mapboxgl as any).accessToken = this.canvas.accessToken;
	}

	/* change between 'dark' and 'outdoors' map styles (basemaps) */
	changeStyle(): void
	{
		this.splashService.addSplash();

		this.mapStyle === this.styles.default ?
			this.mapStyle = this.styles.outdoors :
			this.mapStyle = this.styles.default;

		this.map.setStyle(this.mapStyle);

		/* add layers to new map style after delay for aesthetic purposes */
		this.layerService.layers.map((layer: mapboxgl.Layer, index: number) =>
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
