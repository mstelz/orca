import Component from '@ember/component';
import Chart from 'npm:chart.js';
import moment from 'npm:moment';

export default Component.extend({
	type: 'line',
	datasets: [],
	model: undefined,
	temps: Ember.computed('model', function() {
		return this.get('model').map(function(obj) {
			let rObj = {};
			rObj.x = new moment(obj._timestamp, 'YYYY-MM-DD hh:mm:ss');
			rObj.y = obj.temperature;
			return rObj;
		});
	}),
	chart: undefined,
	didUpdateAttrs() {
		let tempChart = this.get('chart');
		tempChart.data.datasets[0].data = this.get('temps');
		tempChart.update();
	},
	didRender() {
		let t = this.get('temps');

		let chart = new Chart(document.getElementById("line-chart"), {
			type: 'line',
			data: {
				datasets: [{
					label: 'Living Room Reef',
					data: t,
					fill: true,
					backgroundColor: 'rgb(37,44,53)',
					borderColor: 'rgb(25, 151, 198)',
					pointBackgroundColor: 'rgb(25, 151, 198)',
					pointRadius: 0,
					cubicInterpolationMode: 'monotone'
				}]
			},
			options: {
				scales: {
					xAxes: [{
						position: 'bottom',
						type: 'time',
						time: {
							displayFormats: {
								unit: 'minute'
							}
						},
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Time'
						},
						ticks: {
							autoSkip: true,
							maxRotation: 60,
							minRotation: 90
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Temperature (F)'
						}
					}]
				}
			}
		});

		this.set('chart', chart);

		// new Chart(document.getElementById("line-chart"), {
		// 	type: 'line',
		// 	data: {
		// 		labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
		// 		datasets: [{
		// 				data: [68, 69, 69, 70, 71, 73, 75, 75, 76, 77],
		// 				label: "Office Planted",
		// 				borderColor: "#3e95cd",
		// 				fill: false
		// 			}, {
		// 				data: [70, 70, 73, 73, 76, 79, 79, 79, 79, 79],
		// 				label: "Office Reef",
		// 				borderColor: "#8e5ea2",
		// 				fill: false
		// 			}, {
		// 				data: [69, 69, 69, 70, 72, 72, 73, 74, 76, 76],
		// 				label: "Living Room Reef",
		// 				borderColor: "#3cba9f",
		// 				fill: false
		// 			}
		// 			// , {
		// 			// 	data: [70, 69, 70, 70, 71, 70, 74, 74, 74, 72],
		// 			// 	label: "Maggie's Office Freshwater",
		// 			// 	borderColor: "#e8c3b9",
		// 			// 	fill: false
		// 			// }, {
		// 			// 	data: [66, 73, 71, 71, 70, 73, 76, 77, 77, 73],
		// 			// 	label: "Basement Freshwater",
		// 			// 	borderColor: "#c45850",
		// 			// 	fill: false
		// 			// }
		// 		]
		// 	},
		// 	options: {
		// 		title: {
		// 			display: true,
		// 			text: ''
		// 		}
		// 	}
		// });
	},

	// 	config: {
	// 		type: 'line',
	// 		data: {
	// 			datasets: [{
	// 				label: "Temperature (F)",
	// 				fill: true,
	// 				backgroundColor: 'rgb(37,44,53)',
	// 				borderColor: 'rgb(25, 151, 198)',
	// 				pointBackgroundColor: 'rgb(25, 151, 198)',
	// 				pointRadius: 0,
	// 				data: {},
	// 				cubicInterpolationMode: 'monotone'
	// 			}]
	// 		},
	// 		options: {
	// 			responsive: true,
	// 			title: {
	// 				display: true,
	// 				text: 'Evo 5 Gallon Temperature'
	// 			},
	// 			legend: {
	// 				display: false
	// 			},
	// 			tooltips: {
	// 				mode: 'index',
	// 				intersect: false,
	// 			},
	// 			hover: {
	// 				mode: 'nearest',
	// 				intersect: true
	// 			},
	// 			scales: {
	// 				xAxes: [{
	// 					type: 'time',
	// 					time: {
	// 						displayFormats: {
	// 							unit: 'minute'
	// 						}
	// 					},
	// 					display: true,
	// 					scaleLabel: {
	// 						display: true,
	// 						labelString: 'Time'
	// 					},
	// 					ticks: {
	// 						autoSkip: true,
	// 						maxRotation: 60,
	// 						minRotation: 90
	// 					}
	// 				}],
	// 				yAxes: [{
	// 					display: true,
	// 					scaleLabel: {
	// 						display: true,
	// 						labelString: 'Temperature (F)'
	// 					}
	// 				}]
	// 			}
	// 		}
	// 	}
	//
	// });
});