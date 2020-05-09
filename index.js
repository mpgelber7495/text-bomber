// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
require("dotenv").config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.ACCOUNT_KEY;
const client = require("twilio")(accountSid, authToken);
const axios = require("axios");

async function getDadJoke() {
  let joke = await axios({
    url: "https://icanhazdadjoke.com/",
    headers: {
      accept: "application/json"
    }
  });
  return joke.data.joke;
}

async function sendMessage(joke) {
  client.messages
    .create({
      body: joke,
      from: "+12057549596",
      to: "+19083586960"
    })
    .then((message) => console.log(message.sid));
}

async function delayedFunction(i) {
  setTimeout(async () => {
    console.log(i);
  }, 1000);
}

async function runScript() {
  let numberOfJokes = 3;

  for (let i = 0; i < numberOfJokes; i++) {
    delayedFunction(i);
    var joke = await getDadJoke();
    sendMessage(joke);
  }
}

// 19492890624
runScript();

// const words = [
//   "Ever give someone a really bad idea and then regret giving them the idea?"
// ];

// words.forEach((word) => {});
