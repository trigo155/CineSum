const express = require('express');
const app = express();

const PORT = 3000;

const router = express.Router();

app.use('/', router);

router.get('/', (req, res) => {

    res.send('Hola cara de bola!!!!')
});

app.listen(PORT, () => {
    console.log(`Servidor a tope con la cope en http://localhost:${PORT}`);
});