import { Injectable } from '@angular/core';
import { LayerStyleService } from '../layerStyle/layerStyle.service';
import { MapService } from '../map/map.service';
import { MarkerDisplayService } from '../markerDisplay/markerDisplay.service';

@Injectable()
export class LayerService
{
	constructor(private layerStyleService: LayerStyleService,
				private mapService: MapService,
				private markerDisplayService: MarkerDisplayService)
	{ }

	public setLayer(layer: string, layerActive: boolean): void
	{
		if (layer === 'terrain')
		{
			/* change between 'dark' and 'outdoors' map styles (basemaps) */
			this.mapService.changeMapStyle();

			/* hide active markers when changing map styles for aesthetic purposes */
			this.markerDisplayService.hideMarkers();

			/* show active markers after changing map styles for aesthetic purposes */
			setTimeout(() => this.markerDisplayService.showMarkers(), 1200);

		}
		else if (layer === 'biosphere' || layer === 'trails')
		{
			if (layerActive)
			{
				this.layerStyleService.layerStyles[this.layerStyleService.layerStylesHash[layer]].layout.visibility = 'visible';
				this.mapService.map.setLayoutProperty(layer, 'visibility', 'visible');

				if (layer === 'trails')
					this.markerDisplayService.addMarkers(layer);

			}
			else
			{
				this.layerStyleService.layerStyles[this.layerStyleService.layerStylesHash[layer]].layout.visibility = 'none';
				this.mapService.map.setLayoutProperty(layer, 'visibility', 'none');

				if (layer === 'trails')
					this.markerDisplayService.removeMarkers(layer);
			}

		}
		else if (layer === 'office' || layer === 'places')
		{
			layerActive ?
				this.markerDisplayService.addMarkers(layer) :
				this.markerDisplayService.removeMarkers(layer);
		}
	}
}
