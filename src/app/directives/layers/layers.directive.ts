import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';
import { LayerService } from '../../services/layer/layer.service';

@Directive({
	selector: '[appTerrain], [appBiosphere], [appOffice], [appPlaces], [appTrails]'
})

export class LayersDirective implements AfterViewInit, OnInit
{
	constructor(private el: ElementRef,
				private layerService: LayerService)
	{ }

	ngOnInit(): void
	{
		this.layerService.layerElements.push(this.el.nativeElement);
	}

	ngAfterViewInit(): void
	{
		this.layerService.createLayerElementsHash();
	}
}
