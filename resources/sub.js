const mqtt = require('mqtt');

const client = mqtt.connect('mqtt:localhost:8080');

const topic = 'sample';

client.on('message', (topic, message)=>console.log(message.toString()));

client.on('connect', ()=>{
    console.log('subscriber connected to server');
    client.subscribe(topic);
});