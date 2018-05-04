export const config = {
	mapCanvas: {
		accessToken: 'pk.eyJ1IjoiZ2Vvc3BhdGlhbHdlYiIsImEiOiJ6WGdOUFRvIn0.GoVRwZq5EfVsLNGyCqgZTw',
		center: [-76.3, 44.45],
		container: 'mapContainer',
		navigationControl: {
			position: 'top-left'
		},
		styles: {
			default: 'mapbox://styles/mapbox/dark-v9',
			outdoors: 'mapbox://styles/mapbox/outdoors-v9'
		},
		zoom: 9
	},
	layers: {
		route: '/layers',
		geojsonLayerCount: 2,
		biosphere: {
			id: 'biosphere',
			fields: 'name, description, ST_AsGeoJSON(geom)',
			layer: {
				id: 'biosphere',
				type: 'fill',
				source: {
					type: 'geojson'
				},
				layout: {
					visibility: 'visible'
				},
				paint: {
					'fill-color': '#090',
					'fill-opacity': .3,
					'fill-outline-color': '#000'
				}
			}
		},
		trail: {
			id: 'trails',
			fields: 'name, description, lat, lng, ST_AsGeoJSON(geom)',
			layer: {
				id: 'trails',
				type: 'line',
				source: {
					type: 'geojson'
				},
				layout: {
					visibility: 'none'
				},
				paint: {
					'line-color': '#aa0000',
					'line-width': 2
				}
			}
		},
		office: {
			id: 'office',
			fields: 'name, description, ST_AsGeoJSON(geom)'
		},
		places: {
			id: 'places',
			fields: 'name, description, ST_AsGeoJSON(geom)'
		}
	},
	trails: [
		{
			name: 'Select Trail',
			center: null,
			zoom: null
		},
		{
			name: 'Blue Mountain',
			center: [-76.04, 44.508],
			zoom: 12
		},
		{
			name: 'Charleston Lake',
			center: [-76.04, 44.508],
			zoom: 12
		},
		{
			name: 'Lemoine Point',
			center: [-76.61, 44.223],
			zoom: 14
		},
		{
			name: 'Lyn Valley',
			center: [-75.75, 44.575],
			zoom: 12
		},
		{
			name: 'Mac Johnson',
			center: [-75.75, 44.575],
			zoom: 12
		},
		{
			name: 'Seeley\'s Bay',
			center: [-76.22, 44.485],
			zoom: 13
		}
	]
};
