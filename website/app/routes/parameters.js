import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
	model() {
		return RSVP.hash({
			types: Ember.$.getJSON('http://www.mikesfishtank.com/api/parameters.php?op=types').then(data => {
				let map = Ember.$.map(data, (d) => {
					return d.name;
				});
				return map;
			}),
			recent: Ember.$.getJSON('http://www.mikesfishtank.com/api/parameters.php?op=recent').then(data => {
				let org = {};

				Ember.$.map(data, (d) => {
					if (!org[d._timestamp]) {
						org[d._timestamp] = {};
					}

					let name = d.name;
					let val = d.value;
					org[d._timestamp] = { ...org[d._timestamp],
						[name]: val
					};
				});

				return org;
			})
		});
	}
});