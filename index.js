const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;

const MongoClient = require("mongodb").MongoClient;
const uri = process.env.DB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const cors = require('cors');
app.use(cors());
app.use(express.json());

async function run() {
    try {
        await client.connect();
        console.log('Connected with MongoDB Databese');
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running niche product website server');
});

app.listen(port, () => {
    console.log(`listening at port:${port}`);
});