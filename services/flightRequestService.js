const { FlightRequest } = require('../models/flightRequest');

class FlightRequestService {
  processFlightRequest(id, departure, destination, departureTime, arrivalTime) {
    const flightRequest = FlightRequest.create(id, departure, destination, departureTime, arrivalTime);
    // TO DO: implement logic for processing the flight request
    return flightRequest;
  }
}

module.exports = { processFlightRequest: FlightRequestService.prototype.processFlightRequest.bind(FlightRequestService.prototype) };