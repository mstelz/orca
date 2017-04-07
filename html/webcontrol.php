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
    <!-- Glyphicons -->
    <link rel="stylesheet" href="css/glyphicons.css">
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
        $(function() {
            $(".btn-group > .btn:not(.auto)").click(function(){
                $(this).addClass("active").siblings("button:not(.auto)").removeClass("active");
                $(this).siblings(".auto").removeClass("active");
            });
            $(".btn-group > .btn.auto").click(function(){
                $(this).toggleClass("active");
            });
        })
        window.onload = function() {

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
                        <a class="qn active" href="webcontrol.php" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="Web Controls">
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
                        <a class="qn" href="stats.php" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="Statistics">
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
                    <h3 class="brx">Module Controller</h3>
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
                    </div>
                </div>

                <div role="tabpanel" class="qu" id="sales" aria-expanded="false">
                    <div class="bvf agn"><iframe class="chartjs-hidden-iframe" tabindex="-1" style="display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;"></iframe>
                    </div>
                </div>

                <div role="tabpanel" class="qu active" id="support" aria-expanded="true">
                    <div class="bvf agn">
                      <div>
                         <strong>Outlet #1: </strong>
                         <div class="btn-group">
                           <button type="button" class="btn btn-secondary active">
                              <span class="glyphicon glyphicon-stop"></span>
                              On
                           </button>
                           <button type="button" class="btn btn-secondary auto">
                                <span class="glyphicon glyphicon-ok"></span>
                                Auto
                           </button>
                           <button type="button" class="btn btn-secondary">
                            <span class="glyphicon glyphicon-stop"></span>
                            Off
                          </button>
                        </div>
                      </div>
                      <div>
                         <strong>Outlet #2: </strong>
                         <div class="btn-group">
                           <button type="button" class="btn btn-secondary active">
                              <span class="glyphicon glyphicon-stop"></span>
                              On
                           </button>
                           <button type="button" class="btn btn-secondary auto">
                                <span class="glyphicon glyphicon-ok"></span>
                                Auto
                           </button>
                           <button type="button" class="btn btn-secondary">
                            <span class="glyphicon glyphicon-stop"></span>
                            Off
                          </button>
                        </div>
                      </div>
                      <div>
                         <strong>Outlet #3: </strong>
                         <div class="btn-group">
                           <button type="button" class="btn btn-secondary active">
                              <span class="glyphicon glyphicon-stop"></span>
                              On
                           </button>
                           <button type="button" class="btn btn-secondary auto active">
                                <span class="glyphicon glyphicon-ok"></span>
                                Auto
                           </button>
                           <button type="button" class="btn btn-secondary">
                            <span class="glyphicon glyphicon-stop"></span>
                            Off
                          </button>
                        </div>
                      </div>
                      <div>
                         <strong>Outlet #4: </strong>
                         <div class="btn-group">
                           <button type="button" class="btn btn-secondary">
                              <span class="glyphicon glyphicon-stop"></span>
                              On
                           </button>
                           <button type="button" class="btn btn-secondary auto">
                                <span class="glyphicon glyphicon-ok"></span>
                                Auto
                           </button>
                           <button type="button" class="btn btn-secondary active">
                            <span class="glyphicon glyphicon-stop"></span>
                            Off
                          </button>
                        </div>
                      </div>
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
