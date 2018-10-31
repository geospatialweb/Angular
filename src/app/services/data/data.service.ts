import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { FeatureCollection } from 'geojson';
import { Layer } from 'mapbox-gl';
import { config } from '../../../config/config.config';
import { Config } from '../../interfaces/config.interface';
import { markers } from '../../../config/markers.config';
import { Markers } from '../../interfaces/markers.interface';
import { styleLayers } from '../../../config/styleLayers.config';
import { StyleLayers } from '../../interfaces/styleLayers.interface';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { StyleLayerService } from '../styleLayer/styleLayer.service';

@Injectable()
export class DataService
{
	private config: Config = config;
	private markers: Markers = markers;
	private styleLayers: StyleLayers = styleLayers;
	private route: string;

	constructor(private httpClient: HttpClient,
				private mapService: MapService,
				private markerService: MarkerService,
				private styleLayerService: StyleLayerService)
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
		for (const prop in this.styleLayers)
		{
			let params: HttpParams = new HttpParams();

			params = params.set('fields', (this.styleLayers as any)[prop].fields);
			params = params.set('table', (this.styleLayers as any)[prop].name);

			this.httpClient
				.get(this.route, {params})
				.subscribe((data: FeatureCollection) =>
				{
					if (data)
					{
						const styleLayer: any = (this.styleLayers as any)[prop].layer;
						styleLayer.source.data = data;

						this.styleLayerService.styleLayers.push(styleLayer as Layer);
						this.styleLayerService.createStyleLayersHash();

						this.mapService.map.addLayer(styleLayer as Layer);
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
