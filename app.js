const express = require('express');
const app = express();
const { apiRouter } = require('./controllers/api');
const { mapRouter } = require('./controllers/map');
const { FlightRequest } = require('./models/flightRequest');
const { db } = require('./config/db');

app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRouter);
app.use('/map', mapRouter);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS flight_requests (
      id INTEGER PRIMARY KEY,
      departure TEXT NOT NULL,
      destination TEXT NOT NULL,
      departureTime TEXT NOT NULL,
      arrivalTime TEXT NOT NULL
    );
  `);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});