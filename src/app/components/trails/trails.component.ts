import { Component, OnInit } from '@angular/core';
import { LngLatLike } from 'mapbox-gl';
import { MapService } from '../../services/map/map.service';
import { TrailsService } from '../../services/trails/trails.service';
import { Trails } from '../../interfaces/trails.interface';
import { trails } from '../../../config/trails.config';

@Component({
	selector: 'app-trails',
	templateUrl: './trails.component.html',
	styleUrls: ['./trails.component.css']
})

export class TrailsComponent implements OnInit
{
	private trails: any[] = trails;

	appTrails: Trails = this.trails as Trails;

	constructor(private mapService: MapService,
				private trailsService: TrailsService)
	{ }

	ngOnInit(): void
	{
		this.trailsService.createTrailsHash(this.trails);
	}

	setTrail(event: MouseEvent): void
	{
		if (event)
		{
			event.stopPropagation();

			const trail: string = (event as any).target.value;

			this.mapService.map.flyTo({
				center: this.trails[this.trailsService.trailsHash[trail]].center as LngLatLike,
				zoom: this.trails[this.trailsService.trailsHash[trail]].zoom
			});
		}
	}
}
