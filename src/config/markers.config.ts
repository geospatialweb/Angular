import { Markers } from '../app/interfaces/markers.interface';

export const markers: Markers = {
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
