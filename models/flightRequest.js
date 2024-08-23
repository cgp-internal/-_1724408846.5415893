class FlightRequest {
  constructor(id, departure, destination, departureTime, arrivalTime) {
    this.id = id;
    this.departure = departure;
    this.destination = destination;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
  }

  static create(id, departure, destination, departureTime, arrivalTime) {
    return new FlightRequest(id, departure, destination, departureTime, arrivalTime);
  }
}

module.exports = { FlightRequest };