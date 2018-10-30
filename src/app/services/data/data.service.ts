import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { FeatureCollection } from 'geojson';
import { Layer } from 'mapbox-gl';
import { markers } from '../../../config/markers.config';
import { Markers } from '../../interfaces/markers.interface';
import { styleLayers } from '../../../config/styleLayers.config';
import { StyleLayers } from '../../interfaces/styleLayers.interface';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { StyleLayersService } from '../styleLayers/styleLayers.service';

@Injectable()
export class DataService
{
	private markers: Markers = markers;
	private office: Markers = this.markers.office;
	private places: Markers = this.markers.places;

	private styleLayers: StyleLayers = styleLayers;
	private biosphere: StyleLayers = this.styleLayers.biosphere;
	private trails: StyleLayers = this.styleLayers.trails;

	constructor(private httpClient: HttpClient,
				private mapService: MapService,
				private markerService: MarkerService,
				private styleLayersService: StyleLayersService)
	{ }

	public getLayers(): void
	{
		let params = new HttpParams();
		params = params.set('fields', this.biosphere.fields);
		params = params.set('table', this.biosphere.name);

		this.httpClient
			.get(this.styleLayers.route, {params})
			.subscribe((data: FeatureCollection) =>
			{
				if (data)
				{
					const biosphere: any = this.biosphere.layer;
					biosphere.source.data = data;

					this.mapService.map.addLayer(biosphere as Layer);

					this.styleLayersService.styleLayers.push(biosphere as Layer);
					this.styleLayersService.createStyleLayersHash();
				}
				else
					console.error('Data Error:\n', data);

				return true;
			},
			(err: HttpErrorResponse) =>
			{
				return console.error('Query Failed:\n', err.error);
			});

		params = new HttpParams();
		params = params.set('fields', this.office.fields);
		params = params.set('table', this.office.name);

		this.httpClient
			.get(this.markers.route, {params})
			.subscribe((data: FeatureCollection) =>
			{
				data ?
					this.markerService.setMarkers(this.office.name, data) :
					console.error('Data Error:\n', data);

				return true;
			},
			(err: HttpErrorResponse) =>
			{
				return console.error('Query Failed:\n', err.error);
			});

		params = new HttpParams();
		params = params.set('fields', this.places.fields);
		params = params.set('table', this.places.name);

		this.httpClient
			.get(this.markers.route, {params})
			.subscribe((data: FeatureCollection) =>
			{
				data ?
					this.markerService.setMarkers(this.places.name, data) :
					console.error('Data Error:\n', data);

				return true;
			},
			(err: HttpErrorResponse) =>
			{
				return console.error('Query Failed:\n', err.error);
			});

		params = new HttpParams();
		params = params.set('fields', this.trails.fields);
		params = params.set('table', this.trails.name);

		this.httpClient
			.get(this.styleLayers.route, {params})
			.subscribe((data: FeatureCollection) =>
			{
				if (data)
				{
					const trails: any = this.trails.layer;
					trails.source.data = data;

					this.mapService.map.addLayer(trails as Layer);

					this.styleLayersService.styleLayers.push(trails as Layer);
					this.styleLayersService.createStyleLayersHash();

					this.markerService.setMarkers(this.trails.name, data);
				}
				else
					console.error('Data Error:\n', data);

				return true;
			},
			(err: HttpErrorResponse) =>
			{
				return console.error('Query Failed:\n', err.error);
			});
	}
}
