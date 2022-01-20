const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;

const { MongoClient, ObjectId } = require("mongodb");
const uri = process.env.DB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const cors = require('cors');
app.use(cors());
app.use(express.json());

async function run() {
    try {
        await client.connect();
        const database = client.db('niche_product_website');
        const apartmentCollection = database.collection('apartments');

        // get apartments
        app.get('/apartments', async (req, res) => {
            const { page = 1, limit = 0 } = req.query;
            let cursor;
            if (limit) {
                cursor = apartmentCollection.find({}).skip(+limit * (+page - 1)).limit(+limit);
            } else {
                cursor = apartmentCollection.find({});
            }
            const result = await cursor.toArray();
            res.send(result);
        });

        // get single apartment
        app.get('/apartments/:apartmentId', async (req, res) => {
            const { apartmentId } = req.params;
            const query = { _id: ObjectId(apartmentId) };
            const result = await apartmentCollection.findOne(query);
            res.send(result);
        });

        // post apartment
        app.post('/apartments', async (req, res) => {
            const newApartment = req.body;
            const result = await apartmentCollection.insertOne(newApartment);
            res.json(result);
        });
    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running niche product website server');
});

app.listen(port, () => {
    console.log(`listening at port:${port}`);
});