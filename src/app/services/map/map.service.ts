import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { canvas } from '../../../config/canvas.config';
import { Canvas } from '../../interfaces/canvas.interface';
import { mapControls } from '../../../config/mapControls.config';
import { MapControls } from '../../interfaces/mapControls.interface';
import { mapStyles } from '../../../config/mapStyles.config';
import { MapStyles } from '../../interfaces/mapStyles.interface';
import { LayerStyleService } from '../layerStyle/layerStyle.service';

@Injectable()
export class MapService
{
	private canvas: Canvas = canvas;
	private mapControls: MapControls = mapControls;
	private mapStyles: MapStyles = mapStyles;

	public map: mapboxgl.Map;
	public mapStyle: string = this.mapStyles.default;
	public mapOptions: mapboxgl.MapboxOptions = {
		container: this.canvas.container,
		style:  this.mapStyle,
		center: this.canvas.center as mapboxgl.LngLatLike,
		zoom: this.canvas.zoom
	};

	public navigationControlPosition: any = this.mapControls.navigationControl.position;

	constructor(private layerStyleService: LayerStyleService)
	{
		(mapboxgl as any).accessToken = this.canvas.accessToken;
	}

	public addLayerStyle(layerStyle: mapboxgl.Layer)
	{
		this.map.addLayer(layerStyle);
	}

	/* change between 'dark' and 'outdoors' map styles (basemaps) */
	public changeMapStyle(): void
	{
		this.mapStyle === this.mapStyles.default ?
			this.mapStyle = this.mapStyles.outdoors :
			this.mapStyle = this.mapStyles.default;

		this.map.setStyle(this.mapStyle);

		/* add layers to new map style after delay for aesthetic purposes */
		this.layerStyleService.layerStyles.map((layerStyle: mapboxgl.Layer) =>
		{
			setTimeout(() =>
			{
				this.map.addLayer(layerStyle);

				if (layerStyle.layout.visibility === 'visible')
					this.map.setLayoutProperty(layerStyle.id, 'visibility', 'visible');
			}, 1000)
		});
	}
}
