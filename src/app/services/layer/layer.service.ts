import { Injectable } from '@angular/core';

@Injectable()
export class LayerService
{
	layers: any[] = [];
	layersHash: object = {};

	layerElements: any[] = [];
	layerElementsHash: object = {};

	constructor() { }

	createLayersHash(): void
	{
		this.layers.map((layer: any, index: number) =>
			this.layersHash[layer.id] = index
		);
	}

	createLayerElementsHash(): void
	{
		this.layerElements.map((layer: any, index: number) =>
		{
			this.layerElementsHash[layer.className] = index;
			return true;
		});
	}
}
