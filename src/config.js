const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    props: {
        mqtt: {
            host: process.env.MQTT_HOST,
            port: Number(process.env.MQTT_PORT)
        },
        express: {
            host: process.env.EXPRESS_HOST,
            port: process.env.EXPRESS_PORT
        }
    },
    database: {}
};