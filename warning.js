// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
require("dotenv").config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.ACCOUNT_KEY;
const client = require("twilio")(accountSid, authToken);
const axios = require("axios");

client.messages
  .create({
    body: "Be very careful jesse. Enjoy these dad jokes :). Ha",
    from: "+12057549596",
    to: "+19083377619"
  })
  .then((message) => console.log(message.sid));
