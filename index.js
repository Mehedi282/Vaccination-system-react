const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');
const cors = require('cors')

const PORT = process.env.PORT || 5000;

const jobpostRoute = require('./routes/registeredperson')

const app = express()
env.config();

mongoose.connect(`mongodb+srv://${process.env.M_DB_User}:${process.env.M_DB_Password}@cluster0.oi8bs.mongodb.net/${process.env.M_DB_Database}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected Succesfully')
})


app.use(express.json())
app.use(cors())


app.use('/api', jobpostRoute)


app.listen(PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`);
})