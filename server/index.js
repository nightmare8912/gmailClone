import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import routes from './routes/route.js';
// to use import like we did above, we need to update package.json and insert "type": "module"


const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use('/', routes); // when empty is hitted, it is redirected to routes

const PORT = 8000;

Connection(); // before starting the function we call this function, which establishes the connection with database

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`)); // this fn takes two arguments, first is the port number and second is the task which we want to do immediately after the serever starts
