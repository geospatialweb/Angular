import { Component, OnInit } from '@angular/core';
import { trails } from '../../../config/trails.config';
import { TrailService } from '../../services/trail/trail.service';

@Component({
	selector: 'app-trails',
	templateUrl: './trail.component.html',
	styleUrls: ['./trail.component.css']
})

export class TrailComponent implements OnInit
{
	public trails: any[] = trails;

	constructor(private trailService: TrailService)
	{
		this.trailService.trails = this.trails;
	}

	public ngOnInit(): void
	{
		this.trailService.createTrailsHash(this.trails);
	}
}
