'use strict';

import express from 'express';
import { quotesRepository } from './quotesRepository.js';  
import { PostHog } from 'posthog-node';
const app = express();
const port = process.env.PORT || 3001;
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = new PostHog(
    process.env.POSTHOG_API_KEY,
    {
        host: 'https://eu.i.posthog.com'
    }
)

app.use(express.static(__dirname + '/public'));

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.get("/", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/index.html");
});

app.get('/api/quotes/:num?', function (req, res) {
    const randomId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    client.capture({
        distinctId: randomId,
        event: 'quote_request',
        properties: {
            numberOfQuotes: req.params.num || 1,
            userAgent: req.get('User-Agent'),
            timestamp: new Date().toISOString(),
            service: 'lucifer-quotes-api'
        }
    });
    res.send(quotesRepository.getRandom(req.params.num || 1));
});


app.listen(port, function () {
    console.log('Server running on port', port);
})