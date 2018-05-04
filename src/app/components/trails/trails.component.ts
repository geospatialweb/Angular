import { Component, OnInit } from '@angular/core';
import { Config } from '../../interfaces/config.interface';
import { config } from '../../../config/config';
import { LngLatLike } from 'mapbox-gl';
import { MapService } from '../../services/map/map.service';
import { TrailsService } from '../../services/trails/trails.service';

@Component({
	selector: 'app-trails',
	templateUrl: './trails.component.html',
	styleUrls: ['./trails.component.css']
})

export class TrailsComponent implements OnInit
{
	private config: Config = config;

	trails: Config = this.config.trails as Config;

	constructor(private mapService: MapService,
				private trailsService: TrailsService)
	{ }

	ngOnInit(): void
	{
		this.trailsService.createTrailsHash(this.config.trails);
	}

	setTrail(event: MouseEvent): void
	{
		if (event)
		{
			event.stopPropagation();

			const trail: string = (event as any).target.value;

			this.mapService.map.flyTo({
				center: this.config.trails[this.trailsService.trailsHash[trail]].center as LngLatLike,
				zoom: this.config.trails[this.trailsService.trailsHash[trail]].zoom
			});
		}
	}
}
