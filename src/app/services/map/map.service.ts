import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { canvas } from '../../../config/canvas.config';
import { Canvas } from '../../interfaces/canvas.interface';
import { StyleLayersService } from '../../services/styleLayers/styleLayers.service';

@Injectable()
export class MapService
{
	private canvas: Canvas = canvas;
	private navigationControl: Canvas = this.canvas.navigationControl;

	styles: Canvas = this.canvas.styles;
	mapStyle: string = this.styles.default;

	map: mapboxgl.Map;

	mapOptions: mapboxgl.MapboxOptions = {
		container: this.canvas.container,
		style:  this.mapStyle,
		center: this.canvas.center as mapboxgl.LngLatLike,
		zoom: this.canvas.zoom
	};

	navigationControlPosition: any = this.navigationControl.position;

	constructor(private styleLayersService: StyleLayersService)
	{
		(mapboxgl as any).accessToken = this.canvas.accessToken;
	}

	/* change between 'dark' and 'outdoors' map styles (basemaps) */
	changeMapStyle(): void
	{
		this.mapStyle === this.styles.default ?
			this.mapStyle = this.styles.outdoors :
			this.mapStyle = this.styles.default;

		this.map.setStyle(this.mapStyle);

		/* add layers to new map style after delay for aesthetic purposes */
		this.styleLayersService.styleLayers.map((layer: mapboxgl.Layer, index: number) =>
		{
			setTimeout(() =>
			{
				this.map.addLayer(layer);

				if (layer.layout.visibility === 'visible')
					this.map.setLayoutProperty(layer.id, 'visibility', 'visible');

				return true;

			}, 1000)

			return true;
		});
	}
}
