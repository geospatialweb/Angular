import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { MapService } from './map.service';
import { Marker, Popup } from 'mapbox-gl';

@Injectable()
export class MarkerService
{
	public markers: any = [];
	public markersHash: object = {};
	private renderer: Renderer2;

	constructor(private rendererFactory: RendererFactory2)
	{
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	private createMarkersHash(): void
	{
		this.markers.map((marker: any, index: number) =>
		{
			const el: any = marker[0].getElement();

			this.markersHash[el.title] = index;
			return true;
		});
	}

	public setMarkers(layer: string, data: any): void
	{
		switch (layer)
		{
			case 'office':
			{
				const office: any = [];

				data.features.map(feature =>
				{
					const el: any = this.renderer.createElement('div');

					el.title = layer;
					el.className = `${el.title}-marker`;

					office.push(
						new Marker(el)
							.setLngLat(feature.geometry.coordinates)
							.setPopup(new Popup({
								offset: 15
							})
								.setHTML(`<b>${feature.properties.name}</b><br>${feature.properties.description}`))
					);

					return true;
				});

				this.markers.push(office);
				this.createMarkersHash();

				break;
			}
			case 'places':
			{
				const places: any = [];

				data.features.map(feature =>
				{
					const el: any = this.renderer.createElement('div');

					el.title = layer;
					el.className = `${el.title}-marker`;

					places.push(
						new Marker(el)
							.setLngLat(feature.geometry.coordinates)
							.setPopup(new Popup({
								offset: 15
							})
							.setHTML(`<b>${feature.properties.name}</b><br>${feature.properties.description}`))
					);

					return true;
				});

				this.markers.push(places);
				this.createMarkersHash();

				break;
			}
			case 'trails':
			{
				const trails: any = [];

				data.features.map(feature =>
				{
					const el: any = this.renderer.createElement('div');

					el.title = layer;
					el.className = `${el.title}-marker`;

					trails.push(
						new Marker(el)
							.setLngLat([feature.properties.lng, feature.properties.lat])
							.setPopup(new Popup({
								offset: 15
							})
								.setHTML(`<b>${feature.properties.name}</b><br>${feature.properties.description}`))
					);

					return true;
				});

				this.markers.push(trails);
				this.createMarkersHash();

				break;
			}
		}
	}
}

@Injectable()
export class MarkerDisplayService
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
