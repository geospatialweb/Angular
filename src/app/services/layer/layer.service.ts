import { Injectable } from '@angular/core';

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
