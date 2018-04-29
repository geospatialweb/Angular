import { Injectable } from '@angular/core';

@Injectable()
export class LayerService
{
	public layerElements: any = [];
	public layerElementsHash: object = {};

	constructor() { }

	public createLayerElementsHash(): void
	{
		this.layerElements.map((layer, index) =>
		{
			this.layerElementsHash[layer.className] = index;
			return true;
		});
	}
}
