// Express is for connection
// Nodemon is for automatic server updation. No need to restart server.
// To connect MongoDb use mongoose which is library which allows us to access MongoDb
// Model is used to store data into our database. Model is used by NodeJs and send it to DB.

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json()); // Used as middleware to enable postman or insomnia clients to use json for sending requests

// Routes
const productRoute = require('./routes/product.routes')
app.use("/api/product", productRoute)

app.get('/', (req, res) => {
    res.send("Hello from NODE Server")
})

mongoose.connect(`mongodb+srv://metal71_db_user:VeCCicduuauXzN41@cluster0.nrhqrwf.mongodb.net/?appName=Cluster0`)
.then(() => {
    console.log("Connected Successfully")
    app.listen(3000, () => {
        console.log(`Server is running on port 3000`);
    })
})
.catch(() => {console.log("Not Connected")});