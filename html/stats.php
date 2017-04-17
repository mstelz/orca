<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">

    <title>Opex</title>

    <!-- Google api Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/toolkit-inverse.css">
    <link rel="stylesheet" href="css/application.css">
    <!-- My CSS -->
    <link rel="stylesheet" href="css/custom.css">

    <!-- Jquery -->
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <!-- Tether -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <!-- Bootstrap JS -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    <!-- Chart.js packaged with Moment.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.bundle.min.js"></script>

    <style>
        /* note: this is a hack for ios iframe for bootstrap themes shopify page */
        /* this chunk of css is not part of the toolkit :) */

        body {
            width: 1px;
            min-width: 100%;
            *width: 100%;
        }
    </style>

    <script>
        var tempChart;

        function populateChart(data) {
            var config = {
                type: 'line',
                data: {
                    datasets: [{
                        label: "Temperature (F)",
                        fill: true,
                        backgroundColor: 'rgb(37,44,53)',
                        borderColor: 'rgb(25, 151, 198)',
                        pointBackgroundColor: 'rgb(25, 151, 198)',
                        pointRadius: 0,
                        data: data.chartData,
                        cubicInterpolationMode: 'monotone'
                    }]
                },
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Evo 5 Gallon Temperature'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
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
				autoSkip: false,
				maxRotation: 90,
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
            };
            return config;
        }

        function retrieveTempData(interval) {
            var oReq = new XMLHttpRequest();
            var url = "retrieveTemps.php";
            var paramName = "?int=";

            if (interval != undefined) {
                url = url + paramName + interval;
            }

            var tempData;
            oReq.onload = function() {
                tempData = this.responseText;
            };
            oReq.open("get", url, false);
            oReq.send();

            var json = JSON.parse(tempData);
            var chartData = [];

            // Stats
            var max;
            var min;
            var count = 0;
            var total = 0;
            $.each(json, function(index, value) {
                if (max === undefined | max < value.temp) {
                    max = value.temp.toFixed(2);
                }

                if (min === undefined | min > value.temp) {
                    min = value.temp.toFixed(2);
                }

                count++;
                total += value.temp;
                chartData.push({
                    x: value.timestamp,
                    y: value.temp
                });
            });

            var average = total / count;
            average = average.toFixed(2);
            var last = chartData[count - 1].y;
	    last = last.toFixed(2);

            return {
                "chartData": chartData,
                "min": min,
                "max": max,
                "average": average,
                "latest": last
            };
        }

        function updateChart(data) {
            tempChart.data.datasets[0].data = data;
            tempChart.update();
        }

        function changeChartInterval(interval, button) {
          //Change this to moment or bootstrap datepicker and use component
          var d = new Date($('#dateRange').val());
          if(interval == 168){
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
          } else if(interval == 720){
              if(d == "Invalid Date"){
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

        function setMinMaxAverageLast(data) {
            $('#max').text(data.max);
            $('#min').text(data.min);
            $('#average').text(data.average);
            $('#latest').text(data.latest);
        }

        window.onload = function() {
          // var today = new Date();
          // var dd = today.getDate();
          // var mm = today.getMonth() + 1; //January is 0!
          // var yyyy = today.getFullYear();
          //
          // if (dd < 10) {
          //     dd = '0' + dd
          // }
          //
          // if (mm < 10) {
          //     mm = '0' + mm
          // }
          //
          // today = mm + '/' + dd + '/' + yyyy;
          //
          // $('#dateRange').val(today);
          $('#dateRange').val($.fn.datepicker.DPGlobal.formatDate(new Date(), "mm/dd/yyyy"));

          var ctx = document.getElementById("canvas").getContext("2d");
          var data = retrieveTempData('24');

          tempChart = new Chart(ctx, populateChart(data));

          setMinMaxAverageLast(data);
        };
    </script>


</head>

<body>

    <div class="brp">

        <nav class="ch">
            <a class="brq" href="../index.html">
                <span class="bv bik brr"></span>
            </a>
            <div class="bru">
                <ul class="nav qq brs aaj">
                    <li class="qp">
                        <a class="qn" href="dashboard.php" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="Overview">
                            <span class="bv bhn"></span>
                            <small class="brt axz">Overview</small>
                        </a>
                    </li>
                    <li class="qp">
                        <a class="qn" href="#" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="History">
                            <span class="bv bnv"></span>
                            <small class="brt axz">History</small>
                        </a>
                    </li>
                    <li class="qp">
                        <a class="qn" href="webcontrol.php" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="Web Controls">
                            <span class="bv bgy"></span>
                            <small class="brt axz">Web Controls</small>
                        </a>
                    </li>
                    <li class="qp">
                        <a class="qn" href="video.php" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="Video">
                            <span class="bv video"></span>
                            <small class="brt axz">Video</small>
                        </a>
                    </li>
                    <li class="qp">
                        <a class="qn active" href="stats.php" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="Statistics">
                            <span class="bv bau"></span>
                            <small class="brt axz">Statistics</small>
                        </a>
                    </li>
                    <li class="qp">
                        <a class="qn" href="#" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="Documentation">
                            <span class="bv biv"></span>
                            <small class="brt axz">Documentation</small>
                        </a>
                    </li>
                    <li class="qp">
                        <a class="qn" href="#" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="Light Controller">
                            <span class="bv bgb"></span>
                            <small class="brt axz">Light Controller</small>
                        </a>
                    </li>
                    <li class="qp">
                        <a class="qn" href="#" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="Signed in as mdo">
                            <!--<img src="../img/avatar-mdo.png" alt="" class="wc">-->
                            <small class="brt axz">@mdo</small>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="bw">
            <div class="brv">
                <div class="brw">
                    <h6 class="bry">Dashboards</h6>
                    <h3 class="brx">Statistics</h3>
                </div>

                <div class="brz">
                    <div class="brg bsb">
                        <!-- <input type="text" value="01/01/15 - 01/08/15" class="form-control" data-provide="datepicker"> -->
                        <input id="dateRange" type="text" value="today()" class="form-control" data-provide="datepicker">
                        <span class="bv bck"></span>
                    </div>
                    <span class="bsa axy"></span>
                    <div class="pz bsb bsd">
                        <button type="button" onclick="changeChartInterval('24', this);" class="time-int ce pi active">Day</button>
                        <button type="button" onclick="changeChartInterval('168', this);" class="time-int ce pi">Week</button>
                        <button type="button" onclick="changeChartInterval('720', this);" class="time-int ce pi">Month</button>
                    </div>
                </div>
            </div>

            <ul class="nav azh age amq afe we" role="tablist">
                <li class="qp" role="presentation">
                    <a href="#traffic" class="qn" role="tab" data-toggle="tab" aria-controls="traffic">PH</a>
                </li>
                <li class="qp" role="presentation">
                    <a href="#sales" class="qn" role="tab" data-toggle="tab" aria-controls="sales" aria-expanded="true">Salinity</a>
                </li>
                <li class="qp" role="presentation">
                    <a href="#support" class="qn active" role="tab" data-toggle="tab" aria-controls="support" aria-expanded="true">Temperature</a>
                </li>
            </ul>

            <hr class="afc agn">

            <div class="qt">
                <div role="tabpanel" class="qu" id="traffic" aria-expanded="false">
                    <div class="di awt bvh">
                        <!-- <div class="en agn">
              <div class="azy aim"><iframe class="chartjs-hidden-iframe" tabindex="-1" style="display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;"></iframe>
                <canvas class="bra js-chart-drawn" width="235" height="235" data-chart="doughnut" data-dataset="[230, 130]" data-dataset-options="{ borderColor: '#252830', backgroundColor: ['#1ca8dd', '#1bc98e'] }" data-labels="['Returning', 'New']" style="display: block; width: 235px; height: 235px;"></canvas>
              </div>
              <strong class="axn">Traffic</strong>
              <h4>New vs Returning</h4>
            </div>
            <div class="en agg">
              <div class="azy aim"><iframe class="chartjs-hidden-iframe" tabindex="-1" style="display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;"></iframe>
                <canvas class="bra js-chart-drawn" width="235" height="235" data-chart="doughnut" data-dataset="[330,30]" data-dataset-options="{ borderColor: '#252830', backgroundColor: ['#1ca8dd', '#1bc98e'] }" data-labels="['Returning', 'New']" style="display: block; width: 235px; height: 235px;"></canvas>
              </div>
              <strong class="axn">Revenue</strong>
              <h4>New vs Restarting</h4>
            </div>
            <div class="en agn">
              <div class="azy aim"><iframe class="chartjs-hidden-iframe" tabindex="-1" style="display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;"></iframe>
                <canvas class="bra js-chart-drawn" width="235" height="235" data-chart="doughnut" data-dataset="[100,260]" data-dataset-options="{ borderColor: '#252830', backgroundColor: ['#1ca8dd', '#1bc98e'] }" data-labels="['Referrals', 'Direct']" style="display: block; width: 235px; height: 235px;"></canvas>
              </div>
              <strong class="axn">Traffic</strong>
              <h4>Direct vs Referrals</h4>
            </div> -->
                    </div>
                </div>

                <div role="tabpanel" class="qu" id="sales" aria-expanded="false">
                    <div class="bvf agn"><iframe class="chartjs-hidden-iframe" tabindex="-1" style="display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;"></iframe>
                        <!-- <canvas class="brb js-chart-drawn" width="1000" height="273" data-chart="line" data-dataset="[[2500, 3300, 2512, 2775, 2498, 3512, 2925, 4275, 3507, 3825, 3445, 3985]]" data-labels="['','Aug 29','','','Sept 5','','','Sept 12','','','Sept 19','']" data-dark="true" style="display: block; width: 1000px; height: 273px;"></canvas> -->
                    </div>
                </div>

                <div role="tabpanel" class="qu active" id="support" aria-expanded="true">
                    <div class="bvf agn"><iframe class="chartjs-hidden-iframe" tabindex="-1" style="display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;"></iframe>
                        <!-- <canvas class="brb js-chart-drawn" width="1000" height="273" data-chart="bar" data-dark="true" data-labels="['August','September','October','November','December','January','February']" data-dataset="[[65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 86, 27, 90]]" data-dataset-options="[{label: 'First dataset'}, {label: 'Second dataset'}]" style="display: block; width: 1000px; height: 273px;"></canvas> -->
                        <canvas id="canvas"></canvas>
                    </div>
                </div>
            </div>

            <div class="brc agj">
                <h3 class="brd bre">Quick stats</h3>
            </div>

            <div class="di bsl afx afz ayo awx">
                <div class="dq em bsm agg">
                    <h3 id="max" class="bqp axp">
                        12,938
                        <small class="bqr bqs">5%</small>
                    </h3>
                    <span class="bqq">Maximum Temp</span>
                </div>
                <div class="dq em bsm agg">
                    <h3 id="min" class="bqp axs">
                        758
                        <small class="bqr bqt">1.3%</small>
                    </h3>
                    <span class="bqq">Minimum Temp</span>
                </div>
                <div class="dq em bsm agg">
                    <h3 id="average" class="bqp axp">
                        1,293
                        <small class="bqr bqs">6.75%</small>
                    </h3>
                    <span class="bqq">Average Temp</span>
                </div>
                <div class="dq em bsm agg">
                    <h3 id="latest" class="bqp axs">
                        ---
                        <small class="bqr bqt">-.-%</small>
                    </h3>
                    <span class="bqq">Latest Temp<!-- Delta? --></span>
                </div>
            </div>

            <hr class="agj">
            <!--
      <div class="di">
        <div class="fa agn">
          <div class="by afz">
            <h6 class="azi">
              Countries
            </h6>

              <a class="rp tr yg" href="#">
                <span class="azj" style="width: 62.4%;"></span>
                <span>United States</span>
                <span class="axn">62.4%</span>
              </a>

              <a class="rp tr yg" href="#">
                <span class="azj" style="width: 15.0%;"></span>
                <span>India</span>
                <span class="axn">15.0%</span>
              </a>

              <a class="rp tr yg" href="#">
                <span class="azj" style="width: 5.0%;"></span>
                <span>United Kingdom</span>
                <span class="axn">5.0%</span>
              </a>

              <a class="rp tr yg" href="#">
                <span class="azj" style="width: 5.0%;"></span>
                <span>Canada</span>
                <span class="axn">5.0%</span>
              </a>

              <a class="rp tr yg" href="#">
                <span class="azj" style="width: 4.5%;"></span>
                <span>Russia</span>
                <span class="axn">4.5%</span>
              </a>

              <a class="rp tr yg" href="#">
                <span class="azj" style="width: 2.3%;"></span>
                <span>Mexico</span>
                <span class="axn">2.3%</span>
              </a>

              <a class="rp tr yg" href="#">
                <span class="azj" style="width: 1.7%;"></span>
                <span>Spain</span>
                <span class="axn">1.7%</span>
              </a>

              <a class="rp tr yg" href="#">
                <span class="azj" style="width: 1.5%;"></span>
                <span>France</span>
                <span class="axn">1.5%</span>
              </a>

              <a class="rp tr yg" href="#">
                <span class="azj" style="width: 1.4%;"></span>
                <span>South Africa</span>
                <span class="axn">1.4%</span>
              </a>

              <a class="rp tr yg" href="#">
                <span class="azj" style="width: 1.2%;"></span>
                <span>Japan</span>
                <span class="axn">1.2%</span>
              </a>

          </div>
          <a href="#" class="ce pi ahr">All countries</a>
        </div>
        <div class="fa agn">
          <div class="by afz">
            <h6 class="azi">
              Most visited pages
            </h6>

              <a class="rp tr yg" href="#">
                <span>/ (Logged out)</span>
                <span class="axn">3,929,481</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>/ (Logged in)</span>
                <span class="axn">1,143,393</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>/tour</span>
                <span class="axn">938,287</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>/features/something</span>
                <span class="axn">749,393</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>/features/another-thing</span>
                <span class="axn">695,912</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>/users/username</span>
                <span class="axn">501,938</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>/page-title</span>
                <span class="axn">392,842</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>/some/page-slug</span>
                <span class="axn">298,183</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>/another/directory/and/page-title</span>
                <span class="axn">193,129</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>/one-more/page/directory/file-name</span>
                <span class="axn">93,382</span>
              </a>

          </div>
          <a href="#" class="ce pi ahr">View all pages</a>
        </div>
        <div class="fa agn">
          <div class="by afz">
            <h6 class="azi">
              Devices and resolutions
            </h6>

              <a class="rp tr yg" href="#">
                <span>Desktop (1920x1080)</span>
                <span class="axn">3,929,481</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>Desktop (1366x768)</span>
                <span class="axn">1,143,393</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>Desktop (1440x900)</span>
                <span class="axn">938,287</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>Desktop (1280x800)</span>
                <span class="axn">749,393</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>Tablet (1024x768)</span>
                <span class="axn">695,912</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>Tablet (768x1024)</span>
                <span class="axn">501,938</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>Phone (320x480)</span>
                <span class="axn">392,842</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>Phone (720x450)</span>
                <span class="axn">298,183</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>Desktop (2560x1080)</span>
                <span class="axn">193,129</span>
              </a>

              <a class="rp tr yg" href="#">
                <span>Desktop (2560x1600)</span>
                <span class="axn">93,382</span>
              </a>

          </div>
          <a href="#" class="ce pi ahr">View all pages</a> -->
        </div>
    </div>
    </div>
    </div>


    <!-- <script src="../js/jquery.min.js"></script> -->
    <!-- <script src="js/chart.js"></script> -->
    <script src="js/tablesorter.min.js"></script>
    <script src="js/toolkit.js"></script>
    <script src="js/application.js"></script>
    <script>
        // execute/clear BS loaders for docs
        $(function() {
            while (window.BS && window.BS.loader && window.BS.loader.length) {
                (window.BS.loader.pop())()
            }
        })
    </script>



</body>

</html>
