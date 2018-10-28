import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { LayerService } from '../layer/layer.service';

@Injectable()
export class SplashService
{
	splashElement: any;

	private renderer: Renderer2;

	constructor(private layerService: LayerService,
				private rendererFactory: RendererFactory2)
	{
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	hideSplash(): void
	{
		this.renderer.removeClass(this.splashElement, 'active');
		this.renderer.addClass(this.layerService.layerElements[this.layerService.layerElementsHash['biosphere']], 'active');
	}
}
