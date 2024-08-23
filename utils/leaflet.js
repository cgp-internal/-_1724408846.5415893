leaflet = {
  map: function(element, options) {
    return new L.Map(element, options);
  },

  tileLayer: function(url, options) {
    return new L.TileLayer(url, options);
  },

  marker: function(latlng, options) {
    return new L.Marker(latlng, options);
  },

  icon: function(options) {
    return new L.Icon(options);
  },

  latLng: function(lat, lng) {
    return new L.LatLng(lat, lng);
  },

  latLngBounds: function(sw, ne) {
    return new L.LatLngBounds(sw, ne);
  }
};

module.exports = {
  leaflet: leaflet
};