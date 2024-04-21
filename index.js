var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// unix: currentUnixTimestamp, utc: current datetime 
app.get("/api", (req, res) => {
  const currentDatetime = new Date().toString();
  const unixTimestamp = Math.floor(new Date("2017-09-15 00:00:00.000").getTime()/1000).toString();

  res.json({unix: unixTimestamp,utc: currentDatetime});
});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
