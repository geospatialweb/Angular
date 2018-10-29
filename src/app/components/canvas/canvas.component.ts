import { Component, OnInit } from '@angular/core';
import { Map, NavigationControl } from 'mapbox-gl';
import { styleLayers } from '../../../config/styleLayers.config';
import { StyleLayers } from '../../interfaces/styleLayers.interface';
import { DataService } from '../../services/data/data.service';
import { MapService } from '../../services/map/map.service';
import { SplashService } from '../../services/splash/splash.service';
import { StyleLayersService } from '../../services/styleLayers/styleLayers.service';

@Component({
	selector: 'app-canvas',
	templateUrl: './canvas.component.html',
	styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements OnInit
{
	private styleLayers: StyleLayers = styleLayers;

	constructor(private dataService: DataService,
				private mapService: MapService,
				private splashService: SplashService,
				private styleLayersService: StyleLayersService)
	{ }

	public ngOnInit(): void
	{
		this.mapService.map = new Map(this.mapService.mapOptions)
			.addControl(new NavigationControl(), this.mapService.navigationControlPosition)
			.on('styledata', () =>
			{
				if (this.styleLayersService.styleLayers.length === this.styleLayers.count &&
					this.splashService.splashElement.className === 'splash active')
				{
					this.styleLayersService.createStyleLayersHash();
					this.splashService.hideSplash();
				}

				return true;
			})
			.on('load', () =>
				this.dataService.getLayers()
			);
	}
}
