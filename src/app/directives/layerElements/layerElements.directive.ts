import { Directive, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { LayerElementsService } from '../../services/layerElements/layerElements.service';

@Directive({
	selector: '[terrain], [biosphere], [office], [places], [trails], [reset]'
})

export class LayersElementsDirective implements OnInit
{
	constructor(private el: ElementRef,
				private layerElementsService: LayerElementsService)
	{ }

	public ngOnInit(): void
	{
		this.layerElementsService.addLayerElement(this.el.nativeElement);

		fromEvent(this.el.nativeElement, 'click')
			.subscribe(event =>
			{
				const layer: string = (event as any).target.classList[0];

				return this.layerElementsService.setLayerElements(layer, event as MouseEvent);
			});
	}
}
