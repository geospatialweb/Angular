import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { FeatureCollection } from 'geojson';
import { Layer, Map, NavigationControl } from 'mapbox-gl';
import { layers } from '../../../config/layers.config';
import { Layers } from '../../interfaces/layers.interface';
import { LayerService } from '../../services/layer/layer.service';
import { MapService } from '../../services/map/map.service';
import { MarkerService } from '../../services/marker/marker.service';
import { SplashService } from '../../services/splash/splash.service';

@Component({
	selector: 'app-canvas',
	templateUrl: './canvas.component.html',
	styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements OnInit
{
	private layers: Layers = layers;
	private biosphere: Layers = this.layers.biosphere;
	private office: Layers = this.layers.office;
	private places: Layers = this.layers.places;
	private trails: Layers = this.layers.trails;

	constructor(private httpClient: HttpClient,
				private layerService: LayerService,
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
				if (this.layerService.layers.length === this.layers.geojsonLayerCount &&
					this.splashService.splashElement.className === 'active')
				{
					this.layerService.createLayersHash();
					this.splashService.hideSplash();
				}

				return true;
			})
			.on('load', () =>
			{
				let params = new HttpParams();
       			params = params.set('fields', this.biosphere.fields);
				params = params.set('table', this.biosphere.name);

				this.httpClient
					.get(this.layers.route, {params})
					.subscribe((data: FeatureCollection) =>
					{
						if (data)
						{
							const biosphere: any = this.biosphere.layer;
							biosphere.source.data = data;

							this.mapService.map.addLayer(biosphere as Layer);
							this.layerService.layers.push(biosphere as Layer);
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
					.get(this.layers.route, {params})
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
					.get(this.layers.route, {params})
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
					.get(this.layers.route, {params})
					.subscribe((data: FeatureCollection) =>
					{
						if (data)
						{
							const trails: any = this.trails.layer;
							trails.source.data = data;

							this.mapService.map.addLayer(trails as Layer);
							this.layerService.layers.push(trails as Layer);

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

				return true;
			});
	}
}
