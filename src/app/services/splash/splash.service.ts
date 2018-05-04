import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { LayerService } from '../layer/layer.service';

@Injectable()
export class SplashService
{
	private renderer: Renderer2;

	splashElement: any;

	constructor(private layerService: LayerService,
				private rendererFactory: RendererFactory2)
	{
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	addSplash(): void
	{
		this.renderer.addClass(this.splashElement, 'visible');
	}

	removeSplash(): void
	{
		this.renderer.removeClass(this.splashElement, 'visible');
	}

	hideSplash(): void
	{
		this.renderer.removeClass(this.splashElement, 'active');
		this.renderer.addClass(this.layerService.layerElements[this.layerService.layerElementsHash['biosphere']], 'active');
	}
}
