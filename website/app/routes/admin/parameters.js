import Ember from 'ember'
import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
	model() {
		return RSVP.hash({
      types: Ember.$.getJSON('http://www.mikesfishtank.com/api/parameters.php?op=types'),
      tanks: Ember.$.getJSON('http://www.mikesfishtank.com/api/tanks.php')
    })
  }
})