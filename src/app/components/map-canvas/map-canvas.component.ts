import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { FeatureCollection } from 'geojson';
import { Layer, Map, NavigationControl } from 'mapbox-gl';
import { layers } from '../../../config/layers.config'
import { Layers } from '../../interfaces/layers.interface';
import { LayerService } from '../../services/layer/layer.service';
import { MapService } from '../../services/map/map.service';
import { MarkerService } from '../../services/marker/marker.service';
import { SplashService } from '../../services/splash/splash.service';

@Component({
	selector: 'app-map-canvas',
	templateUrl: './map-canvas.component.html',
	styleUrls: ['./map-canvas.component.css']
})

export class MapCanvasComponent implements Layers, OnInit
{
	private layers: Layers = layers;

	biosphere: Layers = this.layers.biosphere;
	office: Layers = this.layers.office;
	places: Layers = this.layers.places;
	trails: Layers = this.layers.trails;

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
				params = params.set('table', this.biosphere.id);

				this.httpClient.get(this.layers.route, {params})
					.subscribe((data: FeatureCollection) =>
					{
						if (data)
						{
							const biosphere: any = this.biosphere.layer;
							biosphere.source.data = data;

							this.mapService.map.addLayer(biosphere);
							this.layerService.layers.push(biosphere);
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
				params = params.set('table', this.office.id);

				this.httpClient.get(this.layers.route, {params})
					.subscribe((data: FeatureCollection) =>
					{
						data ?
							this.markerService.setMarkers(this.office.id, data) :
							console.error('Data Error:\n', data);

						return true;
					},
					(err: HttpErrorResponse) =>
					{
						return console.error('Query Failed:\n', err.error);
					});

				params = new HttpParams();
				params = params.set('fields', this.places.fields);
				params = params.set('table', this.places.id);

				this.httpClient.get(this.layers.route, {params})
					.subscribe((data: FeatureCollection) =>
					{
						data ?
							this.markerService.setMarkers(this.places.id, data) :
							console.error('Data Error:\n', data);

						return true;
					},
					(err: HttpErrorResponse) =>
					{
						return console.error('Query Failed:\n', err.error);
					});

				params = new HttpParams();
				params = params.set('fields', this.trails.fields);
				params = params.set('table', this.trails.id);

				this.httpClient.get(this.layers.route, {params})
					.subscribe((data: FeatureCollection) =>
					{
						if (data)
						{
							const trails: any = this.trails.layer;
							trails.source.data = data;

							this.mapService.map.addLayer(trails as Layer);
							this.layerService.layers.push(trails);

							this.markerService.setMarkers(this.trails.id, data);
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
