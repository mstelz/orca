<html lang="en" data-ember-extension="1">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">

    <title>Opex</title>

    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic" rel="stylesheet">


    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
  	<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
  	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

    <link href="../css/toolkit-inverse.css" rel="stylesheet">

    <link href="../css/application.css" rel="stylesheet">

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
            <a class="qn" href="../index.html" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="Overview">
              <span class="bv bhn"></span>
              <small class="brt axz">Overview</small>
            </a>
          </li>
          <li class="qp">
            <a class="qn" href="../order-history/index.html" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="Order history">
              <span class="bv bnv"></span>
              <small class="brt axz">History</small>
            </a>
          </li>
          <li class="qp">
            <a class="qn" href="../fluid/index.html" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="Fluid layout">
              <span class="bv bgy"></span>
              <small class="brt axz">Fluid layout</small>
            </a>
          </li>
          <li class="qp">
            <a class="qn active" href="../icon-nav/index.html" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="Icon-nav">
              <span class="bv bau"></span>
              <small class="brt axz">Icon nav</small>
            </a>
          </li>
          <li class="qp">
            <a class="qn" href="../docs/index.html" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="Docs">
              <span class="bv biv"></span>
              <small class="brt axz">Docs</small>
            </a>
          </li>
          <li class="qp">
            <a class="qn" href="../index-light/index.html" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="Light UI">
              <span class="bv bgb"></span>
              <small class="brt axz">Light UI</small>
            </a>
          </li>
          <li class="qp">
            <a class="qn" href="#" title="" data-toggle="tooltip" data-placement="right" data-container="body" data-original-title="Signed in as mdo">
              <img src="../img/avatar-mdo.png" alt="" class="wc">
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
            <input type="text" value="01/01/15 - 01/08/15" class="form-control" data-provide="datepicker">
            <span class="bv bck"></span>
          </div>
          <span class="bsa axy"></span>
          <div class="pz bsb bsd">
            <button type="button" class="ce pi">Day</button>
            <button type="button" class="ce pi active">Week</button>
            <button type="button" class="ce pi">Month</button>
          </div>
        </div>
      </div>

      <ul class="nav azh age amq afe we" role="tablist">
        <li class="qp" role="presentation">
          <a href="#traffic" class="qn active" role="tab" data-toggle="tab" aria-controls="traffic">Traffic</a>
        </li>
        <li class="qp" role="presentation">
          <a href="#sales" class="qn active" role="tab" data-toggle="tab" aria-controls="sales" aria-expanded="true">Sales</a>
        </li>
        <li class="qp" role="presentation">
          <a href="#support" class="qn active" role="tab" data-toggle="tab" aria-controls="support" aria-expanded="true">Support</a>
        </li>
      </ul>

      <hr class="afc agn">

      <div class="qt">
        <div role="tabpanel" class="qu" id="traffic" aria-expanded="false">
          <div class="di awt bvh">
            <div class="en agn">
              <div class="azy aim"><iframe class="chartjs-hidden-iframe" tabindex="-1" style="display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;"></iframe>
                <canvas class="bra js-chart-drawn" width="235" height="235" data-chart="doughnut" data-dataset="[230, 130]" data-dataset-options="{ borderColor: '#252830', backgroundColor: ['#1ca8dd', '#1bc98e'] }" data-labels="['Returning', 'New']" style="display: block; width: 235px; height: 235px;">
                </canvas>
              </div>
              <strong class="axn">Traffic</strong>
              <h4>New vs Returning</h4>
            </div>
            <div class="en agg">
              <div class="azy aim"><iframe class="chartjs-hidden-iframe" tabindex="-1" style="display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;"></iframe>
                <canvas class="bra js-chart-drawn" width="235" height="235" data-chart="doughnut" data-dataset="[330,30]" data-dataset-options="{ borderColor: '#252830', backgroundColor: ['#1ca8dd', '#1bc98e'] }" data-labels="['Returning', 'New']" style="display: block; width: 235px; height: 235px;">
                </canvas>
              </div>
              <strong class="axn">Revenue</strong>
              <h4>New vs Recurring</h4>
            </div>
            <div class="en agn">
              <div class="azy aim"><iframe class="chartjs-hidden-iframe" tabindex="-1" style="display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;"></iframe>
                <canvas class="bra js-chart-drawn" width="235" height="235" data-chart="doughnut" data-dataset="[100,260]" data-dataset-options="{ borderColor: '#252830', backgroundColor: ['#1ca8dd', '#1bc98e'] }" data-labels="['Referrals', 'Direct']" style="display: block; width: 235px; height: 235px;">
                </canvas>
              </div>
              <strong class="axn">Traffic</strong>
              <h4>Direct vs Referrals</h4>
            </div>
          </div>
        </div>

        <div role="tabpanel" class="qu" id="sales" aria-expanded="false">
          <div class="bvf agn"><iframe class="chartjs-hidden-iframe" tabindex="-1" style="display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;"></iframe>
            <canvas class="brb js-chart-drawn" width="1000" height="273" data-chart="line" data-dataset="[[2500, 3300, 2512, 2775, 2498, 3512, 2925, 4275, 3507, 3825, 3445, 3985]]" data-labels="['','Aug 29','','','Sept 5','','','Sept 12','','','Sept 19','']" data-dark="true" style="display: block; width: 1000px; height: 273px;">
            </canvas>
          </div>
        </div>

        <div role="tabpanel" class="qu active" id="support" aria-expanded="true">
          <div class="bvf agn"><iframe class="chartjs-hidden-iframe" tabindex="-1" style="display: block; overflow: hidden; border: 0px; margin: 0px; top: 0px; left: 0px; bottom: 0px; right: 0px; height: 100%; width: 100%; position: absolute; pointer-events: none; z-index: -1;"></iframe>
            <canvas class="brb js-chart-drawn" width="1000" height="273" data-chart="bar" data-dark="true" data-labels="['August','September','October','November','December','January','February']" data-dataset="[[65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 86, 27, 90]]" data-dataset-options="[{label: 'First dataset'}, {label: 'Second dataset'}]" style="display: block; width: 1000px; height: 273px;">
            </canvas>
          </div>
        </div>
      </div>

      <div class="brc agj">
        <h3 class="brd bre">Quick stats</h3>
      </div>

      <div class="di bsl afx afz ayo awx">
        <div class="dq em bsm agg">
          <h3 class="bqp axp">
            12,938
            <small class="bqr bqs">5%</small>
          </h3>
          <span class="bqq">Page views</span>
        </div>
        <div class="dq em bsm agg">
          <h3 class="bqp axs">
            758
            <small class="bqr bqt">1.3%</small>
          </h3>
          <span class="bqq">Downloads</span>
        </div>
        <div class="dq em bsm agg">
          <h3 class="bqp axp">
            1,293
            <small class="bqr bqs">6.75%</small>
          </h3>
          <span class="bqq">Sign-ups</span>
        </div>
        <div class="dq em bsm agg">
          <h3 class="bqp axs">
            758
            <small class="bqr bqt">1.3%</small>
          </h3>
          <span class="bqq">Downloads</span>
        </div>
      </div>

      <hr class="agj">

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
          <a href="#" class="ce pi ahr">View all pages</a>
        </div>
      </div>
    </div>
  </div>


    <script src="../js/jquery.min.js"></script>
    <script src="../js/chart.js"></script>
    <script src="../js/tablesorter.min.js"></script>
    <script src="../js/toolkit.js"></script>
    <script src="../js/application.js"></script>
    <script>
      // execute/clear BS loaders for docs
      $(function(){while(window.BS&&window.BS.loader&&window.BS.loader.length){(window.BS.loader.pop())()}})
    </script>



</body></html>
