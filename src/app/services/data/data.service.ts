import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { FeatureCollection } from 'geojson';
import { Layer } from 'mapbox-gl';
import { config } from '../../../config/config.config';
import { Config } from '../../interfaces/config.interface';
import { markers } from '../../../config/markers.config';
import { Markers } from '../../interfaces/markers.interface';
import { layerStyles } from '../../../config/layerStyles.config';
import { LayerStyles } from '../../interfaces/layerStyles.interface';
import { LayerStyleService } from '../layerStyle/layerStyle.service';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';

@Injectable()
export class DataService
{
	private config: Config = config;
	private layerStyles: LayerStyles = layerStyles;
	private markers: Markers = markers;
	private route: string;

	constructor(private httpClient: HttpClient,
				private layerStyleService: LayerStyleService,
				private mapService: MapService,
				private markerService: MarkerService)
	{
		this.route = this.config.data.route;
	}

	public getMarkers(): void
	{
		for (const prop in this.markers)
		{
			let params: HttpParams = new HttpParams();

			params = params.set('fields', (this.markers as any)[prop].fields);
			params = params.set('table', (this.markers as any)[prop].name);

			this.httpClient
				.get(this.route, {params})
				.subscribe((data: FeatureCollection) =>
				{
					data ?
						this.markerService.setMarkers((this.markers as any)[prop].name, data) :
						console.error('Data Error:\n', data);
				},
				(err: HttpErrorResponse) =>
				{
					console.error('Query Failed:\n', err.error);
				});
		}
	}

	public getStyleLayers(): void
	{
		for (const prop in this.layerStyles)
		{
			let params: HttpParams = new HttpParams();

			params = params.set('fields', (this.layerStyles as any)[prop].fields);
			params = params.set('table', (this.layerStyles as any)[prop].name);

			this.httpClient
				.get(this.route, {params})
				.subscribe((data: FeatureCollection) =>
				{
					if (data)
					{
						const layerStyle: any = (this.layerStyles as any)[prop].layer;
						layerStyle.source.data = data;

						this.layerStyleService.layerStyles.push(layerStyle as Layer);
						this.layerStyleService.createStyleLayersHash();

						this.mapService.map.addLayer(layerStyle as Layer);
					}
					else
						console.error('Data Error:\n', data);
				},
				(err: HttpErrorResponse) =>
				{
					console.error('Query Failed:\n', err.error);
				});
		}
	}
}
