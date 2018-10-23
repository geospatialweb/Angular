import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';
import { LayerService } from '../../services/layer/layer.service';
import { fromEvent } from 'rxjs';

@Directive({
	selector: '[appTerrain], [appBiosphere], [appOffice], [appPlaces], [appTrails], [appReset]'
})

export class LayersDirective implements AfterViewInit, OnInit
{
	constructor(private el: ElementRef,
				private layerService: LayerService)
	{ }

	ngOnInit(): void
	{
		this.layerService.layerElements.push(this.el.nativeElement);

		fromEvent(this.el.nativeElement, 'click')
			.subscribe(event =>
			{
				const layer: string = (event as any).target.classList[0];

				this.layerService.setLayer(layer, event as MouseEvent);
			});
	}

	ngAfterViewInit(): void
	{
		this.layerService.createLayerElementsHash();
	}
}
