import { Injectable } from '@angular/core';

@Injectable()
export class LayerService
{
	layerElements: any = [];
	layerElementsHash: object = {};

	constructor() { }

	createLayerElementsHash(): void
	{
		this.layerElements.map((layer, index) =>
		{
			this.layerElementsHash[layer.className] = index;
			return true;
		});
	}
}
