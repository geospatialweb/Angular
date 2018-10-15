import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
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

	private params: any = {};
	private socket: SocketIOClient.Socket;
	private url: string = this.layers.url;

	constructor(private layerService: LayerService,
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
				this.socket = io(this.url);

				this.params = {
					fields: this.biosphere.fields,
					table: this.biosphere.name
				};

				this.socket.emit(this.layers.event, this.params);

				this.socket.on(this.biosphere.name, (data: FeatureCollection) =>
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
				});

				this.params = {
					fields: this.office.fields,
					table: this.office.name
				};

				this.socket.emit(this.layers.event, this.params);

				this.socket.on(this.office.name, (data: FeatureCollection) =>
				{
					data ?
						this.markerService.setMarkers(this.office.name, data) :
						console.error('Data Error:\n', data);

					return true;
				});

				this.params = {
					fields: this.places.fields,
					table: this.places.name
				};

				this.socket.emit(this.layers.event, this.params);

				this.socket.on(this.places.name, (data: FeatureCollection) =>
				{
					data ?
						this.markerService.setMarkers(this.places.name, data) :
						console.error('Data Error:\n', data);

					return true;
				});

				this.params = {
					fields: this.trails.fields,
					table: this.trails.name
				};

				this.socket.emit(this.layers.event, this.params);

				this.socket.on(this.trails.name, (data: FeatureCollection) =>
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
				});

				return true;
			});
	}
}
