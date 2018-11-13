import { ElementRef, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { LayerService } from '../layer/layer.service';

@Injectable()
export class LayerElementService
{
	private renderer: Renderer2;

	public layerElements: any[] = [];
	public layerElementsHash: any = {};

	constructor(private layerService: LayerService,
				private rendererFactory: RendererFactory2)
	{
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	private createLayerElementsHash(): void
	{
		this.layerElements.map((el: ElementRef, i: number) =>
			this.layerElementsHash[(el as any).className] = i
		);
	}

	public addLayerElement(el: ElementRef): void
	{
		if (!this.layerElementsHash.hasOwnProperty((el as any).className))
		{
			this.layerElements.push(el);
			this.createLayerElementsHash();
		}
	}

	/* toggle layer controller UI on/off */
	public setLayerElements(layer: string, event: MouseEvent): void
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
