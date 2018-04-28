import { Injectable } from '@angular/core';
import MapService from './map.service';
import MarkerService from './marker.service';

@Injectable()
export default class MarkerDisplayService
{
	constructor(private mapService: MapService,
				private markerService: MarkerService)
	{ }

	public addMarkers(layer): void
	{
		this.markerService.markers[this.markerService.markersHash[layer]]
			.map(marker => marker.addTo(this.mapService.map));
	}

	public removeMarkers(layer): void
	{
		this.markerService.markers[this.markerService.markersHash[layer]]
			.map(marker => marker.remove());
	}

	public hideMarkers(): void
	{
		this.markerService.markers.map(marker =>
		{
			const id: string = marker[0].getElement().title;
			const el: any = document.querySelectorAll(`div.${id}-marker`);

			if (el.length)
			{
				this.removeMarkers(id);
				marker.hidden = true;
			}

			return true;
		});
	}

	public showMarkers(): void
	{
		this.markerService.markers.map(marker =>
		{
			if (marker.hidden)
			{
				const id: string = marker[0].getElement().title;

				this.addMarkers(id);
				marker.hidden = false;
			}

			return true;
		});
	}
}
