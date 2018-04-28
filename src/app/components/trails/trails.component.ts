import { Component } from '@angular/core';
import MapService from '../../providers/map.service';
import config from '../../../config/config';

@Component({
	selector: 'trails',
	styleUrls: ['./trails.component.css'],
	templateUrl: './trails.component.html'
})

export default class TrailsComponent
{
	private selectedOption: string = config.trails.selectedOption;

	constructor(private mapService: MapService) { }

	private setTrail(): void
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
