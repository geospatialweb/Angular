import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { FeatureCollection } from 'geojson';
import { Layer } from 'mapbox-gl';
import { Subscription } from 'rxjs';
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

	private layerStyleSubscription: Subscription;
	private markerSubscription: Subscription;
	private route: string;

	constructor(private httpClient: HttpClient,
				private layerStyleService: LayerStyleService,
				private mapService: MapService,
				private markerService: MarkerService)
	{
		this.route = this.config.data.route;
	}

	/* HTTP request to obtain layer styles from back end PostGIS SQL */
	public getLayerStyles(): void
	{
		for (const prop in this.layerStyles)
		{
			let params: HttpParams = new HttpParams();

			params = params.set('fields', (this.layerStyles as any)[prop].fields);
			params = params.set('table', (this.layerStyles as any)[prop].name);

			this.layerStyleSubscription = this.httpClient
				.get(this.route, {params})
				.subscribe((data: FeatureCollection) =>
				{
					if (data)
					{
						const layerStyle: any = (this.layerStyles as any)[prop].layer;
						layerStyle.source.data = data;

						this.layerStyleService.setLayerStyle(layerStyle as Layer);
						this.mapService.addLayerStyle(layerStyle as Layer);
					}
					else
						console.error('Data Error:\n', data);
				},
				(err: HttpErrorResponse) =>
				{
					console.error('Query Failed:\n', err.error);
				},
				() =>
				{
					if (this.layerStyleService.layerStyles.length === Object.keys(this.layerStyles).length)
					{
						this.layerStyleService.createLayerStylesHash();
						this.layerStyleSubscription.unsubscribe();
					}
				});
		}
	}

	/* HTTP request to obtain markers from back end PostGIS SQL */
	public getMarkers(): void
	{
		for (const prop in this.markers)
		{
			let params: HttpParams = new HttpParams();

			params = params.set('fields', (this.markers as any)[prop].fields);
			params = params.set('table', (this.markers as any)[prop].name);

			this.markerSubscription = this.httpClient
				.get(this.route, {params})
				.subscribe((data: FeatureCollection) =>
				{
					data ?
						this.markerService.setMarker((this.markers as any)[prop].name, data) :
						console.error('Data Error:\n', data);
				},
				(err: HttpErrorResponse) =>
				{
					console.error('Query Failed:\n', err.error);
				},
				() =>
				{
					if (this.markerService.markers.length === Object.keys(this.markers).length)
					{
						this.markerService.createMarkersHash();
						this.markerSubscription.unsubscribe();
					}
				});
		}
	}
}
