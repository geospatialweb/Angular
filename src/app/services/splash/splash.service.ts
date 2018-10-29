import { ElementRef, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { LayerElementsService } from '../layerElements/layerElements.service';

@Injectable()
export class SplashService
{
	private renderer: Renderer2;

	public splashElement: any;

	constructor(private layerElementsService: LayerElementsService,
				private rendererFactory: RendererFactory2)
	{
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	public hideSplash(): void
	{
		this.renderer.removeClass(this.splashElement, 'active');
		this.renderer.addClass(this.layerElementsService.layerElements[this.layerElementsService.layerElementsHash['biosphere']], 'active');
	}

	public nativeElement(el: ElementRef): void
	{
		this.splashElement = el;
	}
}
