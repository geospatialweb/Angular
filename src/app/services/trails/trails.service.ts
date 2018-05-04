import { Injectable } from '@angular/core';
import { Trails } from '../../interfaces/trails.interface';

@Injectable()
export class TrailsService
{
	trailsHash: any = {};

	constructor() { }

	createTrailsHash(trails: any[]): void
	{
		trails.map((trail: Trails, index: number) =>
		{
			this.trailsHash[trail.name] = index;
			return true;
		});
	}
}
