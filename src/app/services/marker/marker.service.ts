import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { FeatureCollection, Feature, Point } from 'geojson';
import { LngLatLike, Marker, Popup } from 'mapbox-gl';
import { MapService } from '../../services/map/map.service';

@Injectable()
export class MarkerService
{
	markers: any[] = [];
	markersHash: any = {};

	private renderer: Renderer2;

	constructor(private mapService: MapService,
				private rendererFactory: RendererFactory2)
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

	setMarkers(layer: string, data: FeatureCollection): void
	{
		const markers: any[] = [];

		data.features.map((feature: Feature) =>
		{
			const el: any = this.renderer.createElement('div');

			el.id = layer;
			el.className = `${el.id}-marker`;

			const popup: Popup = new Popup({
				closeButton: false,
				offset: 15
			});

			if (layer === 'office' || layer === 'places')
			{
				el.addEventListener('mouseenter', () =>
				{
					this.mapService.map.getCanvas().style.cursor = 'pointer';

					popup.setLngLat((feature.geometry as Point).coordinates as LngLatLike)
						 .setHTML(`<b>${feature.properties.name}</b><br>${feature.properties.description}`)
						 .addTo(this.mapService.map);
				});

				el.addEventListener('mouseleave', () =>
				{
					this.mapService.map.getCanvas().style.cursor = '';

        			popup.remove();
				});

				markers.push(
					new Marker(el)
						.setLngLat((feature.geometry as Point).coordinates as LngLatLike)
				);
			}
			else if (layer === 'trails')
			{
				el.addEventListener('mouseenter', () =>
				{
					this.mapService.map.getCanvas().style.cursor = 'pointer';

					popup.setLngLat([feature.properties.lng, feature.properties.lat] as LngLatLike)
						 .setHTML(`<b>${feature.properties.name}</b><br>${feature.properties.description}`)
						 .addTo(this.mapService.map);
				});

				el.addEventListener('mouseleave', () =>
				{
					this.mapService.map.getCanvas().style.cursor = '';

        			popup.remove();
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
