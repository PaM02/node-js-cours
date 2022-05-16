const express = require('express');

const app = express();

app.use((req, resp) => {
    resp.json({ message: "votre message " });
});

module.exports = app;