import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Map, NavigationControl } from 'mapbox-gl';
import { MapService } from '../../services/map.service';
import { MarkerService } from '../../services/marker.service';
import { SplashService } from '../../services/splash.service';
import { config } from '../../../config/config';

@Component({
	selector: 'map-canvas',
	templateUrl: './map-canvas.component.html',
	styleUrls: ['./map-canvas.component.css']
})

export class MapCanvasComponent implements OnInit
{
	constructor(private httpClient: HttpClient,
				private mapService: MapService,
				private markerService: MarkerService,
				private splashService: SplashService)
	{ }

	ngOnInit(): void
	{
		this.mapService.map = new Map(this.mapService.mapOptions)
			.addControl(new NavigationControl(), this.mapService.navigationControlPosition)
			.on('styledata', () =>
			{
				if (this.mapService.layers.length === config.layers.geojsonLayerCount &&
					this.splashService.splashElement.className === 'active')
				{
					this.mapService.createLayersHash();
					this.splashService.hideSplash();
				}

				return true;
			})
			.on('load', () =>
			{
				let params = new HttpParams();
       			params = params.set('fields', config.layers.biosphere.postgres.fields);
				params = params.set('table', config.layers.biosphere.postgres.table);

				this.httpClient.get(config.layers.route, {params})
					.subscribe(data =>
					{
						if (data)
						{
							const biosphere: any = config.layers.biosphere.layer;
							biosphere.source.data = data;

							this.mapService.map.addLayer(biosphere);
							this.mapService.layers.push(biosphere);

						} else
							console.error('Data Error:\n', data);

						return true;
					},
					(err: HttpErrorResponse) =>
					{
						return console.error('Query Failed:\n', err.error);
					});

				params = new HttpParams();

       			params = params.set('fields', config.layers.office.postgres.fields);
				params = params.set('table', config.layers.office.postgres.table);

				this.httpClient.get(config.layers.route, {params})
					.subscribe(data =>
					{
						data ?
							this.markerService.setMarkers(config.layers.office.layer.id, data) :
							console.error('Data Error:\n', data);

						return true;
					},
					(err: HttpErrorResponse) =>
					{
						return console.error('Query Failed:\n', err.error);
					});

				params = new HttpParams();
				params = params.set('fields', config.layers.places.postgres.fields);
				params = params.set('table', config.layers.places.postgres.table);

				this.httpClient.get(config.layers.route, {params})
					.subscribe(data =>
					{
						data ?
							this.markerService.setMarkers(config.layers.places.layer.id, data) :
							console.error('Data Error:\n', data);

						return true;
					},
					(err: HttpErrorResponse) =>
					{
						return console.error('Query Failed:\n', err.error);
					});

				params = new HttpParams();
				params = params.set('fields', config.layers.trails.postgres.fields);
				params = params.set('table', config.layers.trails.postgres.table);

				this.httpClient.get(config.layers.route, {params})
					.subscribe(data =>
					{
						if (data)
						{
							const trails: any = config.layers.trails.layer;
							trails.source.data = data;

							this.mapService.map.addLayer(trails);
							this.mapService.layers.push(trails);

							this.markerService.setMarkers(config.layers.trails.layer.id, data);

						} else
							console.error('Data Error:\n', data);

						return true;
					},
					(err: HttpErrorResponse) =>
					{
						return console.error('Query Failed:\n', err.error);
					});

				return true;
			});
	}
}
