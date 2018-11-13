import { Injectable } from '@angular/core';
import { Layer } from 'mapbox-gl';

@Injectable()
export class LayerStyleService
{
	public layerStyles: any[] = [];
	public layerStylesHash: any = {};

	constructor() { }

	public createLayerStylesHash(): void
	{
		this.layerStyles.map((layerStyle: Layer, i: number) =>
			this.layerStylesHash[layerStyle.id] = i
		);
	}

	public setLayerStyle(layerStyle: Layer): void
	{
		this.layerStyles.push(layerStyle);
	}
}
