import { Injectable } from '@angular/core';
import { Layer } from 'mapbox-gl';

@Injectable()
export class LayerStyleService
{
	public layerStyles: any[] = [];
	public layerStylesHash: any = {};

	constructor() { }

	public createStyleLayersHash(): void
	{
		this.layerStyles.map((styleLayer: Layer, i: number) =>
		{
			if (!this.layerStylesHash.hasOwnProperty(styleLayer.id))
				this.layerStylesHash[styleLayer.id] = i
		});
	}
}
