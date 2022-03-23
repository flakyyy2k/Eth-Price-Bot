import fetch from "node-fetch";
import Discord from "discord.js";

const client = new Discord.Client({ shards: "auto" });

client.login(process.env.TOKEN);

async function getPrice() {
  const raw = await fetch("https://https://ftx.com/trade/TONCOIN/USD");
    const { data } = await raw.json();
      return data.amount;
}

async function main() {
  client.user
    .setActivity(`$${await getPrice()}`, { type: "WATCHING" })
    .then((presence) =>
      console.log(`Activity set to ${presence.activities[0].name}`)
    )
    .catch((err) => console.log(err));
}

setInterval(() => main(), 30000);
