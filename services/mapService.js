const { leaflet } = require('../utils/leaflet');

let map;
let tileLayer;
let marker;
let icon;
let latLng;
let latLngBounds;

function getMapData() {
  map = leaflet.map('map', {
    center: [51.505, -0.09],
    zoom: 12
  });

  tileLayer = leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{x}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
  });

  marker = leaflet.marker([51.505, -0.09]).addTo(map);
  icon = leaflet.icon({
    iconUrl: 'marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  });

  latLng = leaflet.latLng(51.505, -0.09);
  latLngBounds = leaflet.latLngBounds([[51.505, -0.09], [51.506, -0.08]]);

  map.addLayer(tileLayer);
}

module.exports = {
  getMapData
};