import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { canvas } from '../../../config/canvas.config';
import { Canvas } from '../../interfaces/canvas.interface';
import { StyleLayersService } from '../styleLayers/styleLayers.service';

@Injectable()
export class MapService
{
	private canvas: Canvas = canvas;
	private navigationControl: Canvas = this.canvas.navigationControl;

	public styles: Canvas = this.canvas.styles;
	public mapStyle: string = this.styles.default;

	public map: mapboxgl.Map;

	public mapOptions: mapboxgl.MapboxOptions = {
		container: this.canvas.container,
		style:  this.mapStyle,
		center: this.canvas.center as mapboxgl.LngLatLike,
		zoom: this.canvas.zoom
	};

	public navigationControlPosition: any = this.navigationControl.position;

	constructor(private styleLayersService: StyleLayersService)
	{
		(mapboxgl as any).accessToken = this.canvas.accessToken;
	}

	/* change between 'dark' and 'outdoors' map styles (basemaps) */
	public changeMapStyle(): void
	{
		this.mapStyle === this.styles.default ?
			this.mapStyle = this.styles.outdoors :
			this.mapStyle = this.styles.default;

		this.map.setStyle(this.mapStyle);

		/* add layers to new map style after delay for aesthetic purposes */
		this.styleLayersService.styleLayers.map((styleLayer: mapboxgl.Layer) =>
		{
			setTimeout(() =>
			{
				this.map.addLayer(styleLayer);

				if (styleLayer.layout.visibility === 'visible')
					this.map.setLayoutProperty(styleLayer.id, 'visibility', 'visible');

				return true;

			}, 1000)

			return true;
		});
	}
}
