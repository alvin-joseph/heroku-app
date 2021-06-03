require('dotenv').config();
const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());


if (process.env.NODE_ENV === 'production') {
    console.log('this means this code is deployed');
  }

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
    res.json({ message: "WELCOME TO THE HOME PAGE!"});
});

server.get('/api', (req, res) => {
    res.json({ message: `${process.env.MESSAGE}`});
});

server.use((req, res) => {
    res.status(404).json({
        message: 'not found sorry'
    });
});

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});