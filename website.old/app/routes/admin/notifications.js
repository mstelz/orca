import Route from '@ember/routing/route';
import Ember from 'ember';
import RSVP from 'rsvp';

export default Route.extend({
	model() {
		return RSVP.hash({
			types: Ember.$.getJSON('http://www.mikesfishtank.com/api/notifications.php')
		});
	}
});