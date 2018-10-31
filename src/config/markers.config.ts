import { Marker } from '../app/interfaces/marker.interface';

export const markers: Marker = {
	office: {
		name: 'office',
		fields: 'name, description, ST_AsGeoJSON(geom)'
	},
	places: {
		name: 'places',
		fields: 'name, description, ST_AsGeoJSON(geom)'
	},
	trails: {
		name: 'trails',
		fields: 'name, description, lat, lng, ST_AsGeoJSON(geom)'
	}
};
