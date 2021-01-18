'use strict';

const express = require('express');
const line = require('@line/bot-sdk');
const PORT = process.env.PORT || 3000;

//TODO とりあえず前のやつ 
const config = {
    channelSecret: 'ff22c1da8d048962bdfb664d876b4ad6',
    channelAccessToken: 'pxxxW2nsPQDm3LRKR1xO3lXUJLZcxlzvBQ0+P1Zg3ANQYuaYY1+UOKyoU24b51lnVimr4wkqPmcjD8LSoyAbfJ0rbHyg2bsx1XnkvRBRdEtOlS+E1P0Hri14BQpUEptXyhI3FWOrtwWUnT4mFlN0RAdB04t89/1O/w1cDnyilFU='
};

const app = express();

app.post('/webhook', line.middleware(config), (req, res) => {
    console.log(req.body.events);
    Promise
      .all(req.body.events.map(handleEvent))
      .then((result) => res.json(result));
});

const client = new line.Client(config);

async function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: event.message.text //実際に返信の言葉を入れる箇所
  });
}

app.listen(PORT);
console.log(`Server running at ${PORT}`);