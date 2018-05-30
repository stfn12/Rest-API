import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import apiRoutes from './routes/api'

mongoose.connect('mongodb://localhost/rest');

let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.listen(8080);
console.log('api running port 8080');