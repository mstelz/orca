import Component from '@ember/component';
import moment from 'npm:moment'

export default Component.extend({
	// classNames: ['brg', 'bsb'],
	model: undefined,
	tagName: '',
	didInsertElement() {
		$('#dateRange').val(moment().format('MM/DD/YYYY'));
	},
	actions: {
		changeChartInterval(interval, button) {
			//Change this to moment or bootstrap datepicker and use component
			let d = new moment(new Date()).format('MM/DD/YYYY');
			if (interval == 168) {
				let startDate = new moment(new Date()).subtract(7, 'd').format('MM/DD/YYYY');
				$('#dateRange').val(startDate + " - " + d);
			} else if (interval == 720) {
				let startDate = new moment(new Date()).subtract(30, 'd').format('MM/DD/YYYY');
				$('#dateRange').val(startDate + " - " + d);
			} else {
				$('#dateRange').val(new moment(new Date()).format('MM/DD/YYYY'));
			}
			// Update button and chart
			$('button.time-int.active').removeClass('active');
			$('#' + interval).addClass('active');
			Ember.$.getJSON('http://www.mikesfishtank.com/api/retrieveTempData.php?interval=' + interval).then(data => {
				this.set('model', data);
			});
		}
	}
});