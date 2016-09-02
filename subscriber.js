/**
 * Created by Claudio on 01/09/2016.
 */
var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', function () {
    client.subscribe('presence');
    client.subscribe('node');
});

client.on('message', function (topic, message) {
    // message is Buffer
    console.log('Topic: ',topic,' - message: ',message.toString());
    //client.end();
});