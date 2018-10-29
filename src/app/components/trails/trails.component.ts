import { Component, OnInit } from '@angular/core';
import { trails } from '../../../config/trails.config';
import { TrailsService } from '../../services/trails/trails.service';

@Component({
	selector: 'app-trails',
	templateUrl: './trails.component.html',
	styleUrls: ['./trails.component.css']
})

export class TrailsComponent implements OnInit
{
	public trails: any[] = trails;

	constructor(private trailsService: TrailsService)
	{
		this.trailsService.trails = this.trails;
	}

	public ngOnInit(): void
	{
		this.trailsService.createTrailsHash(this.trails);
	}
}
