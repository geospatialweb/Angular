import { Injectable } from '@angular/core';
import { Layer } from 'mapbox-gl';

@Injectable()
export class StyleLayersService
{
	public styleLayers: any[] = [];
	public styleLayersHash: any = {};

	constructor() { }

	public createStyleLayersHash(): void
	{
		this.styleLayers.map((styleLayer: Layer, i: number) =>
			this.styleLayersHash[styleLayer.id] = i
		);
	}
}
