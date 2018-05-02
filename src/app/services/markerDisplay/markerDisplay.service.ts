import { Injectable } from '@angular/core';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';

@Injectable()
export class MarkerDisplayService
{
	constructor(private mapService: MapService,
				private markerService: MarkerService)
	{ }

	addMarkers(layer): void
	{
		this.markerService.markers[this.markerService.markersHash[layer]]
			.map(marker => marker.addTo(this.mapService.map));
	}

	removeMarkers(layer): void
	{
		this.markerService.markers[this.markerService.markersHash[layer]]
			.map(marker => marker.remove());
	}

	hideMarkers(): void
	{
		this.markerService.markers.map(marker =>
		{
			const id: string = marker[0].getElement().id;
			const el: any = document.querySelectorAll(`div.${id}-marker`);

			if (el.length)
			{
				this.removeMarkers(id);
				marker.hidden = true;
			}

			return true;
		});
	}

	showMarkers(): void
	{
		this.markerService.markers.map(marker =>
		{
			if (marker.hidden)
			{
				const id: string = marker[0].getElement().id;

				this.addMarkers(id);
				marker.hidden = false;
			}

			return true;
		});
	}
}
