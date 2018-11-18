const router = require('express').Router();
const fs = require("fs");

router.get('/api/temperature', (req, res) => {
  res.send({temperature: getTempFromDevice()});
});

function getTempFromDevice() {
  let base_dir = "/sys/bus/w1/devices";
  let devices = fs.readdirSync(base_dir);
  let device_file = base_dir + "/" + devices.filter(d => d.match("28*"))[0] + "/w1_slave";

  let data = fs.readFileSync(device_file, "utf8");
  data = data.split("\n");

  let confirm = data[0].trim();
  confirm = confirm.substr(confirm.length -3);

  if(confirm != "YES") {
    return;
  } else {
    let tempPos = data[1].indexOf("t=");

    let temp = data[1].substr(tempPos+2);
    let tempC = temp / 1000.0;

    return convertCelviustoFahrenheit(tempC);
  }
}

function convertCelviustoFahrenheit(tempC) {
  return tempC * 9.0 / 5.0 + 32.0;
}


module.exports = router;
