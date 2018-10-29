import { Injectable } from '@angular/core';
import { MapService } from '../../services/map/map.service';
import { MarkerDisplayService } from '../../services/markerDisplay/markerDisplay.service';
import { StyleLayersService } from '../../services/styleLayers/styleLayers.service';

@Injectable()
export class LayerService
{
	constructor(private mapService: MapService,
				private markerDisplayService: MarkerDisplayService,
				private styleLayersService: StyleLayersService)
	{ }

	setLayer(layer: string, layerActive: boolean): void
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
				this.mapService.map.setLayoutProperty(layer, 'visibility', 'visible');
				this.styleLayersService.styleLayers[this.styleLayersService.styleLayersHash[layer]].layout.visibility = 'visible';

				if (layer === 'trails')
					this.markerDisplayService.addMarkers(layer);

			}
			else
			{
				this.mapService.map.setLayoutProperty(layer, 'visibility', 'none');
				this.styleLayersService.styleLayers[this.styleLayersService.styleLayersHash[layer]].layout.visibility = 'none';

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
