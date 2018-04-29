import { Component } from '@angular/core';
import { MapService } from '../../services/map.service';
import { config } from '../../../config/config';

@Component({
	selector: 'app-trails',
	templateUrl: './trails.component.html',
	styleUrls: ['./trails.component.css']
})

export class TrailsComponent
{
	public selectedOption: string = config.trails.selectedOption;

	constructor(private mapService: MapService) { }

	public setTrail(): void
	{
		switch (this.selectedOption)
		{
			case 'Blue Mountain':
				this.mapService.map.flyTo(config.trails['Blue Mountain']);
				break;

			case 'Charleston Lake':
				this.mapService.map.flyTo(config.trails['Charleston Lake']);
				break;

			case 'Lemoine Point':
				this.mapService.map.flyTo(config.trails['Lemoine Point']);
				break;

			case 'Lyn Valley':
				this.mapService.map.flyTo(config.trails['Lyn Valley']);
				break;

			case 'Mac Johnson':
				this.mapService.map.flyTo(config.trails['Mac Johnson']);
				break;

			case 'Seeley\'s Bay':
				this.mapService.map.flyTo(config.trails['Seeley\'s Bay']);
				break;
		}
	}
}
