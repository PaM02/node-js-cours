initialiser un projet node :npm init

1)on ajoute dans le fichier la syntax suivante
console.log('log java');
ensuite on tape en ligne de commande node server pour afficher la console.log

2)Pour créer un serveur Node dans votre fichier server.js , il vous faudra le code suivant :

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
});

server.listen(process.env.PORT || 3000);

3)Pour simplifier le développement Node, vous souhaiterez peut-être installer nodemon . Pour ce faire, exécutez la commande suivante :  npm install -g nodemon

demarrer le serveur on use plus node server on use now nodemon server

4)installer express  npm install express --save

5)creer un fichier app.js puis ajouter dans ce fichier ==>
const express = require('express');
const app = express();
app.use((req, resp) => {
    resp.json({ message: "votre message " });
});
module.exports = app;

6) modifi le script de app.jss =>
const app = require('./app');
app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

7)middleware

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next();
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});

module.exports = app;




