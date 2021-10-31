const mosca = require('mosca');

const settings = {port : 8080};

const server = new mosca.Server(settings);

server.on('ready', ()=>{
    console.log('our mqtt server is ready');
});

// server.on('published', (packet, client)=>{
//     console.log('published', packet.payload);
// });
server.on('clientConnected', (client)=>{
    console.log('Client connected',client.id);
});

server.on('clientDisconnected',(client)=>{
    console.log('Client disconnected',client.id);
})