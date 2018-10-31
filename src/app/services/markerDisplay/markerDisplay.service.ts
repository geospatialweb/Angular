import { Injectable } from '@angular/core';
import { Marker } from 'mapbox-gl';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';

@Injectable()
export class MarkerDisplayService
{
	constructor(private mapService: MapService,
				private markerService: MarkerService)
	{ }

	public addMarkers(layer: string): void
	{
		this.markerService.markers[this.markerService.markersHash[layer]]
			.map((marker: Marker) => marker.addTo(this.mapService.map));
	}

	public removeMarkers(layer: string): void
	{
		this.markerService.markers[this.markerService.markersHash[layer]]
			.map((marker: Marker) => marker.remove());
	}

	public hideMarkers(): void
	{
		this.markerService.markers.map((marker: any) =>
		{
			const name: string = marker[0].getElement().classList[0].replace('-marker', '');
			const el: any = document.querySelectorAll(`div.${name}-marker`);

			if (el.length)
			{
				this.removeMarkers(name);
				marker.hidden = true;
			}
		});
	}

	public showMarkers(): void
	{
		this.markerService.markers.map((marker: any) =>
		{
			if (marker.hidden)
			{
				const name: string = marker[0].getElement().classList[0].replace('-marker', '');

				this.addMarkers(name);
				marker.hidden = false;
			}
		});
	}
}
