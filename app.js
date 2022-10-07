require('dotenv').config()
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo')
/* routes */

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('storage'));

const port = process.env.PORT || 3000;

app.use('/api', require('./routes'))

app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}
    http://localhost:${port}/`);
})

dbConnect()