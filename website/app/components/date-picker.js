import Component from '@ember/component';
import moment from 'npm:moment';
import Ember from 'ember';

export default Component.extend({
	// classNames: ['brg', 'bsb'],
	model: undefined,
	tagName: '',
	didInsertElement() {
		Ember.$('#dateRange').val(moment().format('MM/DD/YYYY'));
	},
	actions: {
		changeChartInterval(interval) {
			//Change this to moment or bootstrap datepicker and use component
			let d = new moment(new Date()).format('MM/DD/YYYY');
			if (interval == 168) {
				let startDate = new moment(new Date()).subtract(7, 'd').format('MM/DD/YYYY');
				Ember.$('#dateRange').val(startDate + " - " + d);
			} else if (interval == 720) {
				let startDate = new moment(new Date()).subtract(30, 'd').format('MM/DD/YYYY');
				Ember.$('#dateRange').val(startDate + " - " + d);
			} else {
				Ember.$('#dateRange').val(new moment(new Date()).format('MM/DD/YYYY'));
			}
			// Update button and chart
			Ember.$('button.time-int.active').removeClass('active');
			Ember.$('#' + interval).addClass('active');
			Ember.$.getJSON('http://www.mikesfishtank.com/api/retrieveTempData.php?interval=' + interval).then(data => {
				this.set('model', data);
			});
		}
	}
});