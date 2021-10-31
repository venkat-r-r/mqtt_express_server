# Express using MQTT broker
###### This project is to develop a complete application that can be used to communicate with microcontrollers like arduino
## MQTT broker
###### Here I have used `mosca` server as a Simple MQTT broker
## Express App
###### I have created restful services so that I can implement any frontend by which users can interact with arduino
## Working
###### Whenever user sends a data or instruction like changing current state of light through post request to our `express` server, our server will publish that data to channel that was subscribed by all our devices
