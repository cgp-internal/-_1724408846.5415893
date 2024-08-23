Flight Request Application
==========================

Overview
--------

This is a Node.js application that allows users to request flights and view them on an interactive map.

How to Run
-----------

To run the application, follow these steps:

1. Install Node.js if you haven't already.
2. Clone the repository and navigate to the project directory.
3. Run the `run.sh` script to install dependencies and start the server.
4. Open a web browser and navigate to `http://localhost:3000` to access the application.

Application Structure
---------------------

* `app.js`: The main entry point for the application, sets up the Express server and defines routes.
* `controllers/`: Directory containing route controllers for handling flight requests and map requests.
* `models/`: Directory containing the FlightRequest model.
* `services/`: Directory containing services for processing flight requests and getting map data.
* `utils/`: Directory containing utility libraries, including Leaflet.js for interactive mapping.
* `public/`: Directory containing static assets, including HTML, CSS, and JavaScript files.
* `config/`: Directory containing configuration files, including database setup.
* `db.sqlite`: SQLite database file for storing flight requests.

Required Dependencies
---------------------

* Node.js
* Express
* Leaflet.js