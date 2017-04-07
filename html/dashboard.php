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
                        <a class="qn active" href="../index.html" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="Overview">
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
                    <h3 class="brx">Overview</h3>
                </div>

                <div class="brz">
                    <div class="brg bsb">
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

            <hr class="afc agn">

            <div class="qt">
                <div role="tabpanel" class="qu active" id="support" aria-expanded="true">
                    <div class="bvf agn">
                        <div class="di bsl">
                            <div class="ep fm afz ang ate">
                                <div class="bsm bqv">
                                    <div class="ahm">
                                        <span class="bqq">Current Temperature</span>
                                        <h2 class="bqp">
                                            77.1
                                            <small class="bqr">°F</small>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div class="ep fm afz ang ate">
                                <div class="bsm bqy">
                                    <div class="ahm">
                                        <span class="bqq">PH</span>
                                        <h2 class="bqp">
                                            8.2
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div class="ep fm afz ang ate">
                                <div class="bsm bqw">
                                    <div class="ahm">
                                        <span class="bqq">Salinity</span>
                                        <h2 class="bqp">
                                            1.025
                                            <small class="bqr bqs">SG</small>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div class="ep fm afz ang ate">
                                <div class="bsm bqx">
                                    <div class="ahm">
                                        <span class="bqq">ORP</span>
                                        <h2 class="bqp">
                                            0
                                            <small class="bqr bqt">1.3%</small>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="agj">
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
