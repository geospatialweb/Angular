import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { LayerService } from './layer.service';

@Injectable()
export class SplashService
{
	public splashElement: any;
	private renderer: Renderer2;

	constructor(private layerService: LayerService,
				private rendererFactory: RendererFactory2)
	{
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	public addSplash(): void
	{
		this.renderer.addClass(this.splashElement, 'visible');
	}

	public removeSplash(): void
	{
		this.renderer.removeClass(this.splashElement, 'visible');
	}

	public hideSplash(): void
	{
		this.renderer.removeClass(this.splashElement, 'active');
		this.renderer.addClass(this.layerService.layerElements[this.layerService.layerElementsHash['biosphere']], 'active');
	}
}
