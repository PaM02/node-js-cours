const express = require('express');
const mongoose = require('mongoose');
const app = express();
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');


mongoose.connect('mongodb+srv://paf:bPfjzoRB4idlJpky@cluster0.dulnduu.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(err => console.log('Connexion à MongoDB échouée !') + err);



/* erreurs de cors */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

/* post */
/* ce middleware nous permet de recuperer le corps json*/
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;