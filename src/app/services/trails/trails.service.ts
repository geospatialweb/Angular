import { Injectable } from '@angular/core';

@Injectable()
export class TrailsService
{
	trailsHash: object = {};

	constructor() { }

	createTrailsHash(trails): void
	{
		trails.map((trail: any, index: number) =>
		{
			this.trailsHash[trail.name] = index;
			return true;
		});
	}
}
