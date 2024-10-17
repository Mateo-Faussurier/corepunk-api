// Imports
const express = require('express');
// Instantiate server
const server = express();

const port = 3000;
const path = require('path');

// Configure routes
server.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('<h1>Bonjour</h1>');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});







// Servir les fichiers statiques du build de React
server.use(express.static(path.join(__dirname, 'client/build')));

// Toutes les autres requêtes renverront le fichier index.html de React
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});