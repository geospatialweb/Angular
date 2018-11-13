import { Injectable } from '@angular/core';
import { LngLatLike } from 'mapbox-gl';
import { MapService } from '../map/map.service';
import { Trails } from '../../interfaces/trails.interface';

@Injectable()
export class TrailService
{
	private trailsHash: any = {};

	public trails: any[];

	constructor(private mapService: MapService) { }

	public createTrailsHash(trails: any[]): void
	{
		trails.filter((d: object, i: number) => { return i > 0; })
			  .map((trail: Trails, i: number) => { return this.trailsHash[trail.name] = i + 1; });
	}

	/* pan and zoom to selected trail */
	public setTrail(event: MouseEvent): void
	{
		if (event)
		{
			event.stopPropagation();

			const trail: string = (event as any).target.value;

			this.mapService.map.flyTo({
				center: this.trails[this.trailsHash[trail]].center as LngLatLike,
				zoom: this.trails[this.trailsHash[trail]].zoom
			});
		}
	}
}
