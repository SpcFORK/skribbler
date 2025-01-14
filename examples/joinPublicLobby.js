// @ts-check
const { Client } = require("skribbler");

const client = new Client({
	name: "Skribbler"
});

client.on("connected", () => {
	console.log("Connected!");
});

client.on("text", (data) => {
	console.log(`[${data.player.name}] ${data.msg}`);
});

client.on("disconnect", (reason) => {
	console.log(reason);
});