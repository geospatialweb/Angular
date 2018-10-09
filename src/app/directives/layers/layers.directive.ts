import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';
import { LayerService } from '../../services/layer/layer.service';
import { fromEvent } from 'rxjs';

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
		fromEvent(this.el.nativeElement, 'click')
			.subscribe(event => {
				const john = (event as any).target.className.replace('active', '');
				console.log(event);
				console.log(john);
			});
	}

	ngAfterViewInit(): void
	{
		this.layerService.createLayerElementsHash();
	}
}
