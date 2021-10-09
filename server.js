//import
import dotenv from 'dotenv'
import express from 'express';
dotenv.config()

const app = express();
import cors from 'cors';
// import bodyParser from 'body-parser';
const PORT = process.env.PORT || 3000;

import mongoose from 'mongoose';

//middleware 


// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
// app.use(bodyParser.json());

//connection mongoose


const uri = process.env.ATLAS_URI;
// console.log(uri)
mongoose.connect(uri, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true,
})
const connection = mongoose.connection;
connection.once('open', () => {
     console.log('Database Connected');
})


//routes 

import exercisesRouter from './routes/exercises.js';
import usersRouter from './routes/users.js'

// app use 
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//listener
app.listen(PORT, () => {
     console.log(`server is running at PORT ${PORT}`);
})