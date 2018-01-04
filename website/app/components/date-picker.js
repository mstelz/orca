import Component from '@ember/component';
import moment from 'npm:moment'

export default Component.extend({
	// classNames: ['brg', 'bsb'],
	tagName: '',
	didInsertElement() {
		$('#dateRange').val(moment().format('MM/DD/YYYY'));
	},
	changeChartInterval(interval, button) {
		//Change this to moment or bootstrap datepicker and use component
		var d = new Date($('#dateRange').val());
		if (interval == 168) {
			var index = d.getDay();
			d.setDate(d.getDate() - index);
			var endDate = new Date(d);
			endDate.setDate(d.getDate() + 6);
			var start_day = d.getDate();
			var start_month = d.getMonth() + 1; //Months are zero based
			var start_year = d.getFullYear();
			var end_day = endDate.getDate();
			var end_month = endDate.getMonth() + 1; //Months are zero based
			var end_year = endDate.getFullYear();

			$('#dateRange').val(start_month + "/" + start_day + "/" + start_year + " - " + end_month + "/" + end_day + "/" + end_year);
		} else if (interval == 720) {
			if (d == "Invalid Date") {
				var val = $('#dateRange').val();
				val = val.split(" - ");
				d = new Date(val[1]);
			}
			var firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
			var lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0);

			var start_day = firstDay.getDate();
			var start_month = firstDay.getMonth() + 1; //Months are zero based
			var start_year = firstDay.getFullYear();
			var end_day = lastDay.getDate();
			var end_month = lastDay.getMonth() + 1; //Months are zero based
			var end_year = lastDay.getFullYear();

			$('#dateRange').val(start_month + "/" + start_day + "/" + start_year + " - " + end_month + "/" + end_day + "/" + end_year);
		} else {
			$('#dateRange').val($.fn.datepicker.DPGlobal.formatDate(new Date(), "mm/dd/yyyy"));
		}
		//console.log(jQuery.fn); //displaying prototyped jquery

		// Update button and chart
		$('button.time-int.active').removeClass('active');
		$(button).addClass('active');
		var data = retrieveTempData(interval);
		updateChart(data.chartData);
		setMinMaxAverageLast(data);
	},
	actions: {
		changeChartInterval(interval, button) {
			debugger;
			//Change this to moment or bootstrap datepicker and use component
			var d = new Date($('#dateRange').val());
			if (interval == 168) {
				var index = d.getDay();
				d.setDate(d.getDate() - index);
				var endDate = new Date(d);
				endDate.setDate(d.getDate() + 6);
				var start_day = d.getDate();
				var start_month = d.getMonth() + 1; //Months are zero based
				var start_year = d.getFullYear();
				var end_day = endDate.getDate();
				var end_month = endDate.getMonth() + 1; //Months are zero based
				var end_year = endDate.getFullYear();

				$('#dateRange').val(start_month + "/" + start_day + "/" + start_year + "-" + end_month + "/" + end_day + "/" + end_year);
			} else if (interval == 720) {
				if (d == "Invalid Date") {
					var val = $('#dateRange').val();
					val = val.split(" - ");
					d = new Date(val[1]);
				}
				var firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
				var lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0);

				var start_day = firstDay.getDate();
				var start_month = firstDay.getMonth() + 1; //Months are zero based
				var start_year = firstDay.getFullYear();
				var end_day = lastDay.getDate();
				var end_month = lastDay.getMonth() + 1; //Months are zero based
				var end_year = lastDay.getFullYear();

				$('#dateRange').val(start_month + "/" + start_day + "/" + start_year + " - " + end_month + "/" + end_day + "/" + end_year);
			} else {
				$('#dateRange').val($.fn.datepicker.DPGlobal.formatDate(new Date(), "mm/dd/yyyy"));
			}
			//console.log(jQuery.fn); //displaying prototyped jquery

			// Update button and chart
			$('button.time-int.active').removeClass('active');
			$(button).addClass('active');
			var data = retrieveTempData(interval);
			updateChart(data.chartData);
			setMinMaxAverageLast(data);
		}
	}
});