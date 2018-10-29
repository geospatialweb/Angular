import { ElementRef, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { LayerService } from '../../services/layer/layer.service';

@Injectable()
export class LayerElementsService
{
	layerElements: any[] = [];
	layerElementsHash: any = {};

	private renderer: Renderer2;

	constructor(private layerService: LayerService,
				private rendererFactory: RendererFactory2)
	{
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	addLayerElement(el: ElementRef) : void
	{
		this.layerElements.push(el);
	}

	createLayerElementsHash(): void
	{
		this.layerElements.map((el: any, i: number) =>
			this.layerElementsHash[el.className] = i
		);
	}

	setLayerElements(layer: string, event: MouseEvent): void
	{
		if (event)
			event.stopPropagation();

		if (layer === 'reset')
			window.location.reload(true);

		else
		{
			let layerActive: boolean;

			if (this.layerElements[this.layerElementsHash[layer]].className === `${layer} active`)
			{
				this.renderer.removeClass(this.layerElements[this.layerElementsHash[layer]], 'active');
				layerActive = false;
			}
			else
			{
				this.renderer.addClass(this.layerElements[this.layerElementsHash[layer]], 'active');
				layerActive = true;
			}

			this.layerService.setLayer(layer, layerActive);
		}
	}
}
