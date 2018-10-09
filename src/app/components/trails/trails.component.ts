import { Component, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { TrailsService } from '../../services/trails/trails.service';
import { trails } from '../../../config/trails.config';

@Component({
	selector: 'app-trails',
	templateUrl: './trails.component.html',
	styleUrls: ['./trails.component.css']
})

export class TrailsComponent implements OnInit
{
	trails: any[] = trails;

	constructor(private el: ElementRef,
				private trailsService: TrailsService)
	{ }

	ngOnInit(): void
	{
		this.trailsService.createTrailsHash(this.trails);

		fromEvent(this.el.nativeElement, 'change')
			.subscribe(event =>
				this.trailsService.setTrail(this.trails, event as MouseEvent)
			);
	}
}
