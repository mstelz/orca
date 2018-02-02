import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return Ember.$.getJSON('http://www.mikesfishtank.com/api/retrieveTempData.php?interval=24').then(d => { console.log(d)});
	}
});