const leaflet = require('../utils/leaflet.js').leaflet;

let map;
let markers = [];

function initMap(element, url, options) {
  map = leaflet.map(element, options);
  const tileLayer = leaflet.tileLayer(url, options);
  tileLayer.addTo(map);
}

function addMarker(latlng, options) {
  const marker = leaflet.marker(latlng, options);
  marker.addTo(map);
  markers.push(marker);
}

function getMarkers() {
  return markers;
}

function clearMarkers() {
  markers.forEach((marker) => {
    map.removeLayer(marker);
  });
  markers = [];
}

module.exports = {
  initMap,
  addMarker,
  getMarkers,
  clearMarkers
};