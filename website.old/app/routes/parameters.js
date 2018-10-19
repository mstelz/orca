import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import moment from 'npm:moment';

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
					let ts = new moment(d._timestamp, 'YYYY-MM-DD hh:mm:ss').format('MM/DD/YY');

					if (!org[ts]) {
						org[ts] = {};
					}

					org[ts] = { ...org[ts],
						[d.name]: d.value
					};
				});

				return org;
			})
		});
	}
});