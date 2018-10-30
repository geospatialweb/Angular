import { Injectable } from '@angular/core';
import { Layer } from 'mapbox-gl';

@Injectable()
export class StyleLayerService
{
	public styleLayers: any[] = [];
	public styleLayersHash: any = {};

	constructor() { }

	public createStyleLayersHash(): void
	{
		this.styleLayers.map((styleLayer: Layer, i: number) =>
		{
			if (!this.styleLayersHash.hasOwnProperty(styleLayer.id))
				this.styleLayersHash[styleLayer.id] = i
		});
	}
}
