// ! Imports
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import StaterPlanConfig from './StaterPlanConfig.js';
import ProPlanConfig from './ProPlanConfig.js';
import QueriesConfig from './QueriesConfig.js';

// ! App Config
const port = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const user_id = process.env.USER_NAME;
const user_password = process.env.USER_PASSWORD;

const DB_URL = `mongodb+srv://${user_id}:${user_password}@ashfitnessacademy.ipygg.mongodb.net/AshFitness?retryWrites=true&w=majority`;

// ! MongoDB Config
mongoose.connect(DB_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

// ! API Routes
app.get('/', (req, res) => {
   res.status(200).send('Welcome At The Backend App Of Ash Fitness!!')
})

app.get('/starterplan', (req, res) => {
   const db = req.body;

   StaterPlanConfig.find(db, (err, data) => {
      if (err) {
         res.status(400).send(err)
      }
      else {
         res.status(200).send(data)
      }
   })
})

app.post('/starterplan', (req, res) => {
   const db = req.body;

   StaterPlanConfig.create(db, (err, data) => {
      if (err) {
         res.status(500).send(err)
      }
      else {
         res.status(201).send(data)
         console.log("Submitted Free Plan Form");
      }
   })
})

app.get('/proplan', (req, res) => {
   const db = req.body;

   ProPlanConfig.find(db, (err, data) => {
      if (err) {
         res.status(400).send(err)
      }
      else {
         res.status(200).send(data)
      }
   })
})

app.post('/proplan', (req, res) => {
   const db = req.body;

   ProPlanConfig.create(db, (err, data) => {
      if (err) {
         res.status(500).send(err)
      }
      else {
         res.status(201).send(data)
         console.log("Submitted Pro Plan Form");
      }
   })
})

app.get('/queries', (req, res) => {
   const db = req.body;

   QueriesConfig.find(db, (err, data) => {
      if (err) {
         res.status(400).send(err)
      }
      else {
         res.status(200).send(data)
      }
   })
})

app.post('/queries', (req, res) => {
   const db = req.body;

   QueriesConfig.create(db, (err, data) => {
      if (err) {
         res.status(500).send(err)
      }
      else {
         res.status(201).send(data)
         console.log("Submitted Queries Form");
      }
   })
})

// ! Listener
app.listen(port, () => {
   console.log(`Backend app listening at http://localhost:${port}`)
})