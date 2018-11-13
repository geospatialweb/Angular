import { Directive, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { TrailService } from '../../services/trail/trail.service';

@Directive({
	selector: '[trailsList]'
})

export class TrailDirective implements OnInit
{
	constructor(private el: ElementRef,
				private trailService: TrailService)
	{ }

	public ngOnInit(): void
	{
		/* RxJS click subscription for the selector above */
		fromEvent(this.el.nativeElement, 'change')
			.subscribe(event =>
				this.trailService.setTrail(event as MouseEvent)
			);
	}
}
