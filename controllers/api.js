const express = require('express');
const apiRouter = express.Router();
const { processFlightRequest } = require('../services/flightRequestService');

apiRouter.post('/flight-requests', (req, res) => {
  try {
    const { id, departure, destination, departureTime, arrivalTime } = req.body;
    const flightRequest = processFlightRequest(id, departure, destination, departureTime, arrivalTime);
    res.status(201).json(flightRequest);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create flight request' });
  }
});

apiRouter.get('/flight-requests', (_, res) => {
  // TO DO: implement logic for retrieving all flight requests
  res.status(200).json([]);
});

apiRouter.get('/flight-requests/:id', (req, res) => {
  const id = req.params.id;
  // TO DO: implement logic for retrieving a single flight request
  res.status(200).json({});
});

module.exports = { apiRouter };