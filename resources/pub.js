const mqtt = require('mqtt');

const client = mqtt.connect('mqtt:localhost:8080');

const topic = 'sample';
let x = false;
client.on('connect', ()=>{
    console.log('publisher connected to server');
    setInterval(()=>client.publish(topic, 'xyzzz'),2000);
});

if(x) {
    
}