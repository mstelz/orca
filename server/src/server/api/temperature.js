const router = require('express').Router();
const fs = require('fs');

function convertCelviustoFahrenheit(tempC) {
  return (tempC * 9.0) / 5.0 + 32.0;
}

function getTempFromDevice() {
  const baseDir = '/sys/bus/w1/devices';
  const devices = fs.readdirSync(baseDir);
  const deviceFile = `${baseDir}/${
    devices.filter(d => d.match('28*'))[0]
  }/w1_slave`;

  let data = fs.readFileSync(deviceFile, 'utf8');
  data = data.split('\n');

  let confirm = data[0].trim();
  confirm = confirm.substr(confirm.length - 3);

  if (confirm === 'YES') {
    const tempPos = data[1].indexOf('t=');

    const temp = data[1].substr(tempPos + 2);
    const tempC = temp / 1000.0;

    return convertCelviustoFahrenheit(tempC);
  }
  return undefined;
}

router.get('/api/temperature', (req, res) => {
  res.send({ temperature: getTempFromDevice() });
});

module.exports = router;
