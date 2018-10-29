import { Directive, ElementRef, OnInit } from '@angular/core';
import { LayerElementsService } from '../../services/layerElements/layerElements.service';
import { fromEvent } from 'rxjs';

@Directive({
	selector: '[appTerrain], [appBiosphere], [appOffice], [appPlaces], [appTrails], [appReset]'
})

export class LayersElementsDirective implements OnInit
{
	constructor(private el: ElementRef,
				private layerElementsService: LayerElementsService)
	{ }

	ngOnInit(): void
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
