import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { MapService } from '../../services/map/map.service';
import { MarkerDisplayService } from '../../services/markerDisplay/markerDisplay.service';
import { Layer } from 'mapbox-gl';

@Injectable()
export class LayerService
{
	layers: any[] = [];
	layersHash: any = {};

	layerElements: any[] = [];
	layerElementsHash: any = {};

	private renderer: Renderer2;

	constructor(private mapService: MapService,
				private markerDisplayService: MarkerDisplayService,
				private rendererFactory: RendererFactory2)
	{
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	createLayersHash(): void
	{
		this.layers.map((layer: Layer, index: number) =>
			this.layersHash[layer.id] = index
		);
	}

	createLayerElementsHash(): void
	{
		this.layerElements.map((el: any, index: number) =>
		{
			this.layerElementsHash[el.className] = index;
			return true;
		});
	}

	/* change between 'dark' and 'outdoors' map styles (basemaps) */
	changeStyle(): void
	{
		this.mapService.mapStyle === this.mapService.styles.default ?
			this.mapService.mapStyle = this.mapService.styles.outdoors :
			this.mapService.mapStyle = this.mapService.styles.default;

		this.mapService.map.setStyle(this.mapService.mapStyle);

		/* add layers to new map style after delay for aesthetic purposes */
		this.layers.map((layer: mapboxgl.Layer, index: number) =>
			setTimeout(() =>
			{
				this.mapService.map.addLayer(layer);

				if (layer.layout.visibility === 'visible')
					this.mapService.map.setLayoutProperty(layer.id, 'visibility', 'visible');

				return true;

			}, 1000)
		);
	}

	setLayer(layer: string, event: MouseEvent): void
	{
		if (event)
			event.stopPropagation();

		if (layer !== 'reset')
		{
			let layerActive: boolean;

			if (this.layerElements[this.layerElementsHash[layer]].className === `${layer} active`) {
				this.renderer.removeClass(this.layerElements[this.layerElementsHash[layer]], 'active');
				layerActive = false;

			}
			else
			{
				this.renderer.addClass(this.layerElements[this.layerElementsHash[layer]], 'active');
				layerActive = true;
			}

			if (layer === 'terrain')
			{
				/* change between 'dark' and 'outdoors' map styles (basemaps) */
				this.changeStyle();

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
					this.layers[this.layersHash[layer]].layout.visibility = 'visible';

					if (layer === 'trails')
						this.markerDisplayService.addMarkers(layer);

				}
				else
				{
					this.mapService.map.setLayoutProperty(layer, 'visibility', 'none');
					this.layers[this.layersHash[layer]].layout.visibility = 'none';

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
		else
			window.location.reload(true);
	}
}
