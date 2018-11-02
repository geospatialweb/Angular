import { ElementRef, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { LayerElementService } from '../layerElement/layerElement.service';
import { layerStyles } from '../../../config/layerStyles.config';
import { LayerStyles } from '../../interfaces/layerStyles.interface';

@Injectable()
export class SplashService
{
	private layerStyles: LayerStyles = layerStyles;
	private renderer: Renderer2;

	public splashElement: any;

	constructor(private layerElementService: LayerElementService,
				private rendererFactory: RendererFactory2)
	{
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	public hideSplash(): void
	{
		this.renderer.removeClass(this.splashElement, 'active');

		this.renderer.addClass(this.layerElementService.layerElements[
			this.layerElementService.layerElementsHash[this.layerStyles.biosphere.layer.id]
		], 'active');
	}

	public nativeElement(el: ElementRef): void
	{
		this.splashElement = el;
	}
}
