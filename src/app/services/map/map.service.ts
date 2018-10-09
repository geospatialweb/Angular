import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { canvas } from '../../../config/canvas.config';
import { Canvas } from '../../interfaces/canvas.interface';

@Injectable()
export class MapService
{
	canvas: Canvas = canvas;
	navigationControl: Canvas = canvas.navigationControl;
	styles: Canvas = canvas.styles;

	map: mapboxgl.Map;
	mapStyle: string = this.styles.default;
	mapOptions: object = {
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
