import { Directive, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { LayerElementService } from '../../services/layerElement/layerElement.service';

@Directive({
	selector: '[terrain], [biosphere], [office], [places], [trails], [reset]'
})

export class LayerElementDirective implements OnInit
{
	constructor(private el: ElementRef,
				private layerElementService: LayerElementService)
	{ }

	public ngOnInit(): void
	{
		this.layerElementService.addLayerElement(this.el.nativeElement);

		/* RxJS click subscription for each of the selectors above */
		fromEvent(this.el.nativeElement, 'click')
			.subscribe(event =>
			{
				const layer: string = (event as any).target.classList[0];

				this.layerElementService.setLayerElements(layer, event as MouseEvent);
			});
	}
}
