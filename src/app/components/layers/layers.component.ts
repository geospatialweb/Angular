import { Component, Renderer2, RendererFactory2 } from '@angular/core';
import DisplayMarkerService from '../../providers/displayMarker.service';
import LayerService from '../../providers/layer.service';
import MapService from '../../providers/map.service';
import config from '../../../config/config';

@Component({
	selector: 'layers',
	styleUrls: ['./layers.component.css'],
	templateUrl: './layers.component.html'
})

export default class LayersComponent
{
	private renderer: Renderer2;

	constructor(private displayMarkerService: DisplayMarkerService,
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

		if (layer) {
			let layerActive: boolean;

			if (this.layerService.layerElements[this.layerService.layerElementsHash[layer]].className === `${layer} active`) {
				this.renderer.removeClass(this.layerService.layerElements[this.layerService.layerElementsHash[layer]], 'active');
				layerActive = false;

			} else {
				this.renderer.addClass(this.layerService.layerElements[this.layerService.layerElementsHash[layer]], 'active');
				layerActive = true;
			}

			if (layer === 'terrain')
			{
				/* change between 'dark' and 'outdoors' map styles (basemaps) */
				this.mapService.changeStyle();

				/* hide active markers when changing map styles for aesthetic purposes */
				this.displayMarkerService.hideMarkers();

				/* show active markers after changing map styles for aesthetic purposes */
				this.mapService.mapStyle === config.map.styles.default ?
					setTimeout(() => this.displayMarkerService.showMarkers(), 1250) :
					setTimeout(() => this.displayMarkerService.showMarkers(), 1500);

			} else if (layer === 'biosphere' || layer === 'trails')
			{
				if (layerActive)
				{
					this.mapService.map.setLayoutProperty(layer, 'visibility', 'visible');
					this.mapService.layers[this.mapService.layersHash[layer]].layout.visibility = 'visible';

					if (layer === 'trails')
						this.displayMarkerService.addMarkers(layer);

				} else
				{
					this.mapService.map.setLayoutProperty(layer, 'visibility', 'none');
					this.mapService.layers[this.mapService.layersHash[layer]].layout.visibility = 'none';

					if (layer === 'trails')
						this.displayMarkerService.removeMarkers(layer);
				}

			} else if (layer === 'office' || layer === 'places')
			{
				layerActive ?
					this.displayMarkerService.addMarkers(layer) :
					this.displayMarkerService.removeMarkers(layer);
			}

		} else
			window.location.reload(true);
	}
}
