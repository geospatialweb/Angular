import { Component, Renderer2, RendererFactory2 } from '@angular/core';
import { LayerService } from '../../services/layer.service';
import { MapService } from '../../services/map.service';
import { MarkerDisplayService } from '../../services/marker.service';
import { config } from '../../../config/config';

@Component({
	selector: 'layers',
	templateUrl: './layers.component.html',
	styleUrls: ['./layers.component.css']
})

export class LayersComponent
{
	private renderer: Renderer2;

	constructor(private markerDisplayService: MarkerDisplayService,
				private layerService: LayerService,
				private mapService: MapService,
				private rendererFactory: RendererFactory2)
	{
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	private setLayer(layer: string, event: MouseEvent): void
	{
		if (event)
			event.stopPropagation();

		if (layer)
		{
			let layerActive: boolean;

			if (this.layerService.layerElements[this.layerService.layerElementsHash[layer]].className === `${layer} active`) {
				this.renderer.removeClass(this.layerService.layerElements[this.layerService.layerElementsHash[layer]], 'active');
				layerActive = false;

			} else
			{
				this.renderer.addClass(this.layerService.layerElements[this.layerService.layerElementsHash[layer]], 'active');
				layerActive = true;
			}

			if (layer === 'terrain')
			{
				/* change between 'dark' and 'outdoors' map styles (basemaps) */
				this.mapService.changeStyle();

				/* hide active markers when changing map styles for aesthetic purposes */
				this.markerDisplayService.hideMarkers();

				/* show active markers after changing map styles for aesthetic purposes */
				this.mapService.mapStyle === config.map.styles.default ?
					setTimeout(() => this.markerDisplayService.showMarkers(), 1250) :
					setTimeout(() => this.markerDisplayService.showMarkers(), 1500);

			} else if (layer === 'biosphere' || layer === 'trails')
			{
				if (layerActive)
				{
					this.mapService.map.setLayoutProperty(layer, 'visibility', 'visible');
					this.mapService.layers[this.mapService.layersHash[layer]].layout.visibility = 'visible';

					if (layer === 'trails')
						this.markerDisplayService.addMarkers(layer);

				} else
				{
					this.mapService.map.setLayoutProperty(layer, 'visibility', 'none');
					this.mapService.layers[this.mapService.layersHash[layer]].layout.visibility = 'none';

					if (layer === 'trails')
						this.markerDisplayService.removeMarkers(layer);
				}

			} else if (layer === 'office' || layer === 'places')
			{
				layerActive ?
					this.markerDisplayService.addMarkers(layer) :
					this.markerDisplayService.removeMarkers(layer);
			}

		} else
			window.location.reload(true);
	}
}
