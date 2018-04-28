import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';
import LayerService from '../services/layer.service';

@Directive({
	selector: '[terrain], [biosphere], [office], [places], [trails]'
})

export default class LayersDirective implements AfterViewInit, OnInit
{
	constructor(private el: ElementRef,
				private layerService:LayerService)
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
