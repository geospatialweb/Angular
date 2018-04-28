import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Marker, Popup } from 'mapbox-gl';

@Injectable()
export default class MarkerService
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
