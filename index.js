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
        const userCollection = database.collection('users');
        const orderCollection = database.collection('orders');

        // get apartments
        app.get('/apartments', async (req, res) => {
            const { page = 1, limit = 0 } = req.query;
            let cursor = apartmentCollection.find({});
            const count = await cursor.count();
            if (limit) {
                cursor = cursor.skip(+limit * (+page - 1)).limit(+limit);
            }
            const results = await cursor.toArray();
            res.send({ count, results });
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

        // delete apartment
        app.delete('/apartments/:apartmentId', async (req, res) => {
            const { apartmentId } = req.params;
            const query = { _id: ObjectId(apartmentId) };
            const result = await apartmentCollection.deleteOne(query);
            res.send(result);
        });

        // get users
        app.get('/users', async (req, res) => {
            const email = req.query.email;
            if (email) {
                const query = { email };
                const result = await userCollection.findOne(query);
                res.send(result);
            } else {
                const cursor = userCollection.findOne({});
                const result = await cursor.toArray();
                res.send(result);
            }
        });

        // post user
        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const result = await userCollection.insertOne(newUser);
            res.json(result);
        });

        // get orders
        app.get('/orders', async (req, res) => {
            const currentUserEmail = req.query.email;
            let query = new Object();
            if (currentUserEmail) {
                query = { 'user.email': currentUserEmail };
            }
            const cursor = orderCollection.find(query);
            const count = await cursor.count();
            const result = await cursor.toArray();
            res.send({ count, result });
        });

        // post order
        app.post('/orders', async (req, res) => {
            const newOrder = req.body;
            const result = await orderCollection.insertOne(newOrder);
            res.json(result);
        });

        // delete order
        app.delete('/orders/:orderId', async (req, res) => {
            const { orderId } = req.params;
            const query = { _id: ObjectId(orderId) };
            const result = await orderCollection.deleteOne(query);
            res.send(result);
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