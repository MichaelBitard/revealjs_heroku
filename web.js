var express = require("express");
var app = express();
app.use(express.logger());
app.use("/", express.static(__dirname));
//app.get('/', function(request, response) {
//  request.redirect('index.html');
//});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
