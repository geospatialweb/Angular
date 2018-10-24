import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { canvas } from '../../../config/canvas.config';
import { Canvas } from '../../interfaces/canvas.interface';

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

	constructor()
	{
		(mapboxgl as any).accessToken = this.canvas.accessToken;
	}
}
