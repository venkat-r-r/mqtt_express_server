const mqtt = require('mqtt');

class MqttHandler{
    constructor({topic = 'sample', url='mqtt:localhost:8080'}){
        this.MqttClient = null;
        this.url = url;
        this.topic = topic;
    }

    connect(){

        // Connecting to Mqtt server
        this.MqttClient = mqtt.connect(this.url);

        // Mqtt error calback
        this.MqttClient.on('error', (err) => {
            console.log(err);
            this.MqttClient.end();
        });
    
        // Connection callback
        this.MqttClient.on('connect', () => {
            if(this.MqttClient.connected){
                console.log(`mqtt client connected`);

                // this.MqttClient.subscribe()
                this.MqttClient.subscribe('fromEsp', {qos: 0});
            }
        });
    
        // When a message arrives, console.log it
        this.MqttClient.on('message', function (topic, message) {
            console.log(message.toString());
            if(topic == 'fromEsp'){
                console.log('ESP32');
            }
        });
    
        this.MqttClient.on('close', () => {
            console.log(`mqtt client disconnected`);
        });
    }
    sendMessage({message, topic = this.topic}){
        this.MqttClient.publish(topic, message);
    }

    subscribe(topic){
        this.MqttClient.subscribe(topic);
    }

    isConnected = () => this.MqttClient.connected;
}
module.exports = MqttHandler;