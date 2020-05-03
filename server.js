const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    // connection url, in case of docker it is service name
    host: 'redis-server',
    port: 6379
});
// initialize value in visits key
client.set('visits', 1);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits: ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port: 8081');
});