"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// // Start writing Firebase Functions
// https://firebase.google.com/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
require('zone.js/dist/zone-node');
const express = require('express');
const path = require('path');
const { enableProdMode } = require('@angular/core');
const { renderModuleFactory } = require('@angular/platform-server');
const { AppServerModuleNgFactory } = require('../dist-ssr/main.bundle');
enableProdMode();
const index = require('fs')
    .readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf8')
    .toString();
const app = express();
app.get('**', function (req, res) {
    renderModuleFactory(AppServerModuleNgFactory, {
        url: req.path,
        document: index
    }).then(html => res.status(200).send(html));
});
exports.ssr = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map