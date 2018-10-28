import { Injectable } from '@angular/core';
import { LngLatLike } from 'mapbox-gl';
import { MapService } from '../../services/map/map.service';
import { Trails } from '../../interfaces/trails.interface';

@Injectable()
export class TrailsService
{
	private trailsHash: any = {};

	constructor(private mapService: MapService) { }

	createTrailsHash(trails: any[]): void
	{
		trails.filter( (d: object, i: number) =>
			  {
				  return i > 0;
			  })
			  .map((trail: Trails, i: number) =>
			  {
				  return this.trailsHash[trail.name] = i + 1;
			  });
	}

	setTrail(trails: any[], event: MouseEvent): void
	{
		if (event)
		{
			event.stopPropagation();

			const trail: string = (event as any).target.value;

			this.mapService.map.flyTo({
				center: trails[this.trailsHash[trail]].center as LngLatLike,
				zoom: trails[this.trailsHash[trail]].zoom
			});
		}
	}
}
