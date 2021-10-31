const express = require('express');
const mqttHandler = require('./resources/MqttHandler');
var app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

var mqttClient = new mqttHandler({});

mqttClient.connect();

app.post("/send", (req, res) => {
  if(mqttClient.isConnected()){
    mqttClient.sendMessage({message : req.body.message});
    res.status(200).send('message sent to mqtt server');
    return;
  }
  res.status(503).send('Right now our mqtt server is unavailable!!');
});

var server = app.listen( 9000, '192.168.10.5' , function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("listening at http://%s:%s", host, port);
});