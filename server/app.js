/*
Put content of angular2 build into 'public' folder.
*/
// Express
import bodyParser from 'body-parser';
import compression from 'compression';
import express from'express';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const html = __dirname;

const port = 4200;
const apiUrl = '/api';

var app = express();

app
    .use(compression())
    .use(bodyParser.json())
    // Static content
    .use(express.static(html))
    // Default route
    .use(function(req, res) {
      res.sendFile(html + '/index.html');
    })
    // Start server
    .listen(port, function () {
        console.log('Port: ' + port);
        console.log('Html: ' + html);
    });
