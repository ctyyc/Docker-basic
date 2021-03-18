const express = require('express');
const redis = require('redis');

// redis client
const client = redis.createClient({
    host: "redis-server",
    port: 6379
});

const app = express()

// start 0
client.set("number", 0);

app.get('/', (req, res) => {
    client.get("number", (err, number) => {
        // plus 1
        client.set("number", parseInt(number) + 1);
        res.send(`숫자가 1씩 올라갑니다. 현재 숫자 : ${number}`);
    })
})

app.listen(8080, () => {
  console.log(`Server is running!`)
})