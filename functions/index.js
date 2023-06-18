import functions from "firebase-functions"
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from "dotenv"
import { getContact } from './src/email.js';

dotenv.config()
 
const app = express();
const PORT = 3001
app.use(cors());
app.use(bodyParser.json());

app.post('/contact', getContact) 

// app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

export const api = functions.https.onRequest(app)
