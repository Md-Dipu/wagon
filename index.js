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
        const bookingCollection = database.collection('bookings');

        // get apartments
        app.get('/apartments', async (req, res) => {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 0;
            let cursor = apartmentCollection.find({});
            const count = await cursor.count();
            if (limit) {
                cursor = cursor.skip(limit * (page - 1)).limit(limit);
            }
            const results = await cursor.toArray();
            res.send({ count, results });
        });

        // get recent apartments
        app.get('/apartments/recent', async (req, res) => {
            const limit = Number(req.query.limit) || 3;
            const cursor = apartmentCollection.find({}).sort({ $natural: -1 }).limit(limit);
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

        // get admin
        app.get('/users/admin', async (req, res) => {
            const query = { role: 'admin' };
            const cursor = userCollection.find(query);
            const result = await cursor.toArray();
            res.json(result);
        });

        // make user admin
        app.put('/users/admin', async (req, res) => {
            const user = req.body;
            const filter = { email: user.email };
            const updateDoc = { $set: { role: 'admin' } };
            const result = await userCollection.updateOne(filter, updateDoc);
            res.json(result);
        });

        // /users/admin/verify
        app.get('/users/admin/verify', async (req, res) => {
            const email = req.query.email;
            const query = { email };
            const user = await userCollection.findOne(query);
            let isAdmin = false;
            if (user?.role === 'admin') {
                isAdmin = true;
            }
            res.json({ admin: isAdmin });
        });

        // get bookings
        app.get('/bookings', async (req, res) => {
            const currentUserEmail = req.query.email;
            let query = new Object();
            if (currentUserEmail) {
                query = { 'user.email': currentUserEmail };
            }
            const cursor = bookingCollection.find(query);
            const count = await cursor.count();
            const result = await cursor.toArray();
            res.send({ count, result });
        });

        // post bookings
        app.post('/bookings', async (req, res) => {
            const newOrder = req.body;
            newOrder.status = 'Pending';
            const result = await bookingCollection.insertOne(newOrder);
            res.json(result);
        });

        // approved booking
        app.put('/bookings/approved/:bookingId', async (req, res) => {
            const { bookingId } = req.params;
            const filter = { _id: ObjectId(bookingId) };
            const update = {
                $set: { status: 'Approved' }
            };
            const result = await bookingCollection.updateOne(filter, update);
            res.json(result);
        });

        // delete bookings
        app.delete('/bookings/:bookingId', async (req, res) => {
            const { bookingId } = req.params;
            const query = { _id: ObjectId(bookingId) };
            const result = await bookingCollection.deleteOne(query);
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