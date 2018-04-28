import { Directive, ElementRef } from '@angular/core';
import LayerService from '../../providers/layer.service';

@Directive({
	selector: '[terrain], [biosphere], [office], [places], [trails]'
})

export default class LayersDirective
{
	constructor(private el: ElementRef,
				private layerService:LayerService)
	{ }

	private ngOnInit(): void
	{
		this.layerService.layerElements.push(this.el.nativeElement);
	}

	private ngAfterViewInit(): void
	{
		this.layerService.createLayerElementsHash();
	}
}
