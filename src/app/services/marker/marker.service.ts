import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { FeatureCollection, Feature, Point } from 'geojson';
import { LngLatLike, Marker, Popup } from 'mapbox-gl';
import { MapService } from '../map/map.service';

@Injectable()
export class MarkerService
{
	private renderer: Renderer2;

	public markers: any[] = [];
	public markersHash: any = {};

	constructor(private mapService: MapService,
				private rendererFactory: RendererFactory2)
	{
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	private createMarkersHash(): void
	{
		this.markers.map((marker: any, i: number) =>
		{
			const name: string = marker[0].getElement().classList[0].replace('-marker', '');

			if (!this.markersHash.hasOwnProperty(name))
				this.markersHash[name] = i;

			return true;
		});
	}

	public setMarkers(name: string, data: FeatureCollection): void
	{
		const markers: any[] = [];

		data.features.map((feature: Feature) =>
		{
			const el: any = this.renderer.createElement('div');
			el.className = `${name}-marker`;

			const popup: Popup = new Popup({
				closeButton: false,
				offset: 15
			});

			if (name === 'office' || name === 'places')
			{
				el.addEventListener('mouseenter', () =>
				{
					this.mapService.map.getCanvas().style.cursor = 'pointer';

					popup.setLngLat((feature.geometry as Point).coordinates as LngLatLike)
						 .setHTML(`<b>${feature.properties.name}</b><br>${feature.properties.description}`)
						 .addTo(this.mapService.map);

					return true;
				});

				el.addEventListener('mouseleave', () =>
				{
					this.mapService.map.getCanvas().style.cursor = '';

					popup.remove();
					return true;
				});

				markers.push(
					new Marker(el)
						.setLngLat((feature.geometry as Point).coordinates as LngLatLike)
				);
			}
			else if (name === 'trails')
			{
				el.addEventListener('mouseenter', () =>
				{
					this.mapService.map.getCanvas().style.cursor = 'pointer';

					popup.setLngLat([feature.properties.lng, feature.properties.lat] as LngLatLike)
						 .setHTML(`<b>${feature.properties.name}</b><br>${feature.properties.description}`)
						 .addTo(this.mapService.map);

					return true;
				});

				el.addEventListener('mouseleave', () =>
				{
					this.mapService.map.getCanvas().style.cursor = '';

					popup.remove();
					return true;
				});

				markers.push(
					new Marker(el)
						.setLngLat([feature.properties.lng, feature.properties.lat] as LngLatLike)
				);
			}

			return true;
		});

		this.markers.push(markers);
		this.createMarkersHash();
	}
}
