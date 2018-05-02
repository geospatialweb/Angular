import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Marker, Popup } from 'mapbox-gl';

@Injectable()
export class MarkerService
{
	markers: any = [];
	markersHash: object = {};
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

			this.markersHash[el.id] = index;
			return true;
		});
	}

	setMarkers(layer: string, data: any): void
	{
		switch (layer)
		{
			case 'office':
			{
				const office: any = [];

				data.features.map(feature =>
				{
					const el: any = this.renderer.createElement('div');

					el.id = layer;
					el.className = `${el.id}-marker`;
					el.title = feature.properties.name;

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

					el.id = layer;
					el.className = `${el.id}-marker`;
					el.title = feature.properties.name;

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

					el.id = layer;
					el.className = `${el.id}-marker`;
					el.title = feature.properties.name;

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
