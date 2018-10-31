import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { canvas } from '../../../config/canvas.config';
import { Canvas } from '../../interfaces/canvas.interface';
import { mapControls } from '../../../config/mapControls.config';
import { MapControl } from '../../interfaces/mapControl.interface';
import { mapStyles } from '../../../config/mapStyles.config';
import { MapStyle } from '../../interfaces/mapStyle.interface';
import { StyleLayerService } from '../styleLayer/styleLayer.service';

@Injectable()
export class MapService
{
	private canvas: Canvas = canvas;
	private mapControls: MapControl = mapControls;
	private mapStyles: MapStyle = mapStyles;

	public map: mapboxgl.Map;
	public mapStyle: string = this.mapStyles.default;
	public mapOptions: mapboxgl.MapboxOptions = {
		container: this.canvas.container,
		style:  this.mapStyle,
		center: this.canvas.center as mapboxgl.LngLatLike,
		zoom: this.canvas.zoom
	};

	public navigationControlPosition: any = this.mapControls.navigationControl.position;

	constructor(private styleLayerService: StyleLayerService)
	{
		(mapboxgl as any).accessToken = this.canvas.accessToken;
	}

	/* change between 'dark' and 'outdoors' map styles (basemaps) */
	public changeMapStyle(): void
	{
		this.mapStyle === this.mapStyles.default ?
			this.mapStyle = this.mapStyles.outdoors :
			this.mapStyle = this.mapStyles.default;

		this.map.setStyle(this.mapStyle);

		/* add layers to new map style after delay for aesthetic purposes */
		this.styleLayerService.styleLayers.map((styleLayer: mapboxgl.Layer) =>
		{
			setTimeout(() =>
			{
				this.map.addLayer(styleLayer);

				if (styleLayer.layout.visibility === 'visible')
					this.map.setLayoutProperty(styleLayer.id, 'visibility', 'visible');
			}, 1000)
		});
	}
}
