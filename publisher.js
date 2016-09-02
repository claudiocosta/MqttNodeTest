/**
 * Created by Claudio on 01/09/2016.
 */
var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', function () {
    client.publish('presence', 'Hello mqtt');
    client.publish('node', 'Node.js Mqtt');
});

//client.on('message', function (topic, message) {
//    // message is Buffer
//    console.log(message.toString());
//    client.end();
//});