import Controller from '@ember/controller';

export default Controller.extend({
	maxTemp: Ember.computed('model', function() {
		return Math.max.apply(Math, this.get('model').map(function(y) {
			return y.temperature;
		}));
	}),
	minTemp: Ember.computed('model', function() {
		return Math.min.apply(Math, this.get('model').map(function(y) {
			return y.temperature;
		}));
	}),
	avgTemp: Ember.computed('model', function() {
		return this.get('model').map(function(row) {
			return row.temperature;
		}).reduce(function(total, amount) {
			return Number(total) + Number(amount);
		}) / this.get('model').length;
	}),
});