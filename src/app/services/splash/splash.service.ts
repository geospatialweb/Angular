import { ElementRef, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { LayerElementService } from '../layerElement/layerElement.service';

@Injectable()
export class SplashService
{
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
		this.renderer.addClass(this.layerElementService.layerElements[this.layerElementService.layerElementsHash['biosphere']], 'active');
	}

	public nativeElement(el: ElementRef): void
	{
		this.splashElement = el;
	}
}
