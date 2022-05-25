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
8)

Dans votre fichier app.js , remplacez tout le middleware par le suivant :

app.use('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'Mon premier objet',
      description: 'Les infos de mon premier objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 2900,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(stuff);
});

9)De retour au fichier app.js , ajoutez le middleware suivant avant la route d'API :
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

10)d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;

d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;

d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).

11) ajouter ceci dans app.js => app.use(express.json());
12) ensuite ça app.post('/api/stuff', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Objet créé !'
  });
});

13)npm install mongoose


