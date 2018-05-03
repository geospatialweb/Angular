import { Injectable } from '@angular/core';

@Injectable()
export class TrailsService
{
	trailsHash: any = {};

	constructor() { }

	createTrailsHash(trails: any[]): void
	{
		trails.map((trail: any, index: number) =>
		{
			this.trailsHash[trail.name] = index;
			return true;
		});
	}
}
