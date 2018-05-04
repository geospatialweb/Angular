import { Injectable } from '@angular/core';
import { Layer } from 'mapbox-gl';

@Injectable()
export class LayerService
{
	layers: any[] = [];
	layersHash: any = {};

	layerElements: any[] = [];
	layerElementsHash: any = {};

	constructor() { }

	createLayersHash(): void
	{
		this.layers.map((layer: Layer, index: number) =>
			this.layersHash[layer.id] = index
		);
	}

	createLayerElementsHash(): void
	{
		this.layerElements.map((el: any, index: number) =>
		{
			this.layerElementsHash[el.className] = index;
			return true;
		});
	}
}
