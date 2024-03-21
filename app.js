
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000; // Vous pouvez spécifier le port que vous souhaitez utiliser

const server = http.createServer((req, res) => {
    // Gérer les requêtes HTTP
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    filePath = path.resolve(filePath);

    const extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Fichier non trouvé
                res.writeHead(404);
                res.end('Fichier non trouvé');
            } else {
                // Erreur du serveur
                res.writeHead(500);
                res.end(`Erreur du serveur: ${err.code}`);
            }
        } else {
            // Succès
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

