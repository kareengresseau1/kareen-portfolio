// const express = require('express');
// const path = require('path');
// const app = express();  

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'portfolio_en.html'));
// });

// app.listen(8080, () => {
//     console.log("Server successfully running on port 8080");
// }); 

const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const app = express();



app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'portfolio_en.html'));
});

app.listen(8080, () => {
    console.log("Serveur en cours d'exécution avec succès sur le port 8080");
});
