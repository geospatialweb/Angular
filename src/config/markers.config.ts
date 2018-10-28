export const markers: any = {
	route: '/data',
	office: {
		name: 'office',
		fields: 'name, description, ST_AsGeoJSON(geom)'
	},
	places: {
		name: 'places',
		fields: 'name, description, ST_AsGeoJSON(geom)'
	}
};
