import { Injectable } from '@angular/core';
import { Layer } from 'mapbox-gl';

@Injectable()
export class StyleLayersService
{
	styleLayers: any[] = [];
	styleLayersHash: any = {};

	constructor() { }

	createStyleLayersHash(): void
	{
		this.styleLayers.map((layer: Layer, i: number) =>
			this.styleLayersHash[layer.id] = i
		);
	}
}
