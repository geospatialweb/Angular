import { Component } from '@angular/core';
import { MapService } from '../../services/map/map.service';
import { TrailsService } from '../../services/trails/trails.service';
import { config } from '../../../config/config';

@Component({
	selector: 'app-trails',
	templateUrl: './trails.component.html',
	styleUrls: ['./trails.component.css']
})

export class TrailsComponent
{
	trails: any[] = config.trails;

	constructor(private mapService: MapService,
				private trailsService: TrailsService)
	{
		trailsService.createTrailsHash(this.trails);
	}

	setTrail(event: MouseEvent): void
	{
		if (event)
		{
			event.stopPropagation();

			const trail: string = (event as any).target.value;

			this.mapService.map.flyTo({
				center: (config as any).trails[this.trailsService.trailsHash[trail]].center,
				zoom: (config as any).trails[this.trailsService.trailsHash[trail]].zoom
			});
		}
	}
}
