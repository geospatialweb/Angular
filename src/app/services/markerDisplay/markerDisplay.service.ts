import { Injectable } from '@angular/core';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';

@Injectable()
export class MarkerDisplayService
{
	constructor(private mapService: MapService,
				private markerService: MarkerService)
	{ }

	addMarkers(layer: string): void
	{
		this.markerService.markers[this.markerService.markersHash[layer]]
			.map((marker: any) => marker.addTo(this.mapService.map));
	}

	removeMarkers(layer: string): void
	{
		this.markerService.markers[this.markerService.markersHash[layer]]
			.map((marker: any) => marker.remove());
	}

	hideMarkers(): void
	{
		this.markerService.markers.map((marker: any) =>
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
		this.markerService.markers.map((marker: any) =>
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
