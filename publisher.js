var mqtt = require('mqtt')

var mqtt_url = process.env.CLOUDMQTT_URL || 'mqtt://localhost:1883';

var topic = process.env.CLOUDMQTT_TOPIC || 'topico/temperatura';
var client = mqtt.connect(mqtt_url);

var cont = 30;
client.on('connect', function () {
	setInterval(function () {
		var msg = "{\"sensorId\":1,\"leitura\":" + (cont).toString() + "}";
		client.publish(topic, msg);
		console.log('Message Sent' + msg);
		cont++;
		if (cont == 60)
			cont = 30;
	}, 5000);
});
