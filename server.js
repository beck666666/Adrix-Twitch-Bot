
require('dotenv').config();
const comandos = require('./comandos.js')
const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'sadbeck',
		password: 'oauth:s2riuh8e6i3pudia2guw1vxcbs8v9r'
	},
	channels: [ 'sadbeck' ]
});
client.connect().catch(console.error);



client.on('message', (channel, tags, message, self) => {
	if(self) return;

	
	if(comandos[message.toLowerCase()]) {
		let randomNum = Math.floor(Math.random() * comandos[message.toLowerCase()].respostas.length);
		let respondercomo=comandos[message.toLowerCase()].respostas[randomNum]
		client.say(channel, respondercomo);
	}

});