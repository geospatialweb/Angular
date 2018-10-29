import { ElementRef, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { LayerElementsService } from '../../services/layerElements/layerElements.service';

@Injectable()
export class SplashService
{
	splashElement: any;

	private renderer: Renderer2;

	constructor(private layerElementsService: LayerElementsService,
				private rendererFactory: RendererFactory2)
	{
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	hideSplash(): void
	{
		this.renderer.removeClass(this.splashElement, 'active');
		this.renderer.addClass(this.layerElementsService.layerElements[this.layerElementsService.layerElementsHash['biosphere']], 'active');
	}

	nativeElement(el: ElementRef): void
	{
		this.splashElement = el;
	}
}
