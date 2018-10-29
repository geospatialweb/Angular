import { Directive, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { TrailsService } from '../../services/trails/trails.service';

@Directive({
	selector: '[trailsSelect]'
})

export class TrailsDirective implements OnInit
{
	constructor(private el: ElementRef,
				private trailsService: TrailsService)
	{ }

	public ngOnInit(): void
	{
		fromEvent(this.el.nativeElement, 'change')
			.subscribe(event =>
				this.trailsService.setTrail(event as MouseEvent)
			);
	}
}
