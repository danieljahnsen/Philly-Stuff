// Create a map object
var myMap = L.map("map", {
  center: [39.952217, -75.193214],
  zoom: 14
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Apt Markers
cities = [{
  location : [39.952217, -75.193214],
  name : "UPenn",
  rent : "My Son Pays Full Tuition at This School!!"
},
{
  location : [39.965800, -75.202470],
  name : "Town Horse",
  rent : "$2,600"
},
{
  location : [39.962340, -75.194840],
  name : "Legacy Boys",
  rent : "$749 - $960 Per Person"
},
{
  location : [39.946910, -75.178010],
  name : "Pine Street Swagu",
  rent : "$2,895"
},
{
  location : [39.95580, -75.203900],
  name : "Chess-Nut",
  rent : "$2,550"
},
{
  location : [39.959620, -75.203380],
  name : "321 N Preston",
  rent : "$1,512"
},
{
  location : [39.955350, -75.154480],
  name : "ChinaTown",
  rent : "$1,700"
},
{
  location : [39.963482, -75.201431],
  name : "616 N Union",
  rent : "$2,100 - 2,500"
},
{
  location : [39.944910, -75.174230],
  name : "Rodman",
  rent : "$2,800"
}
];

// Add code to create a marker for each city below and add it to the map

for (var i = 0; i < cities.length; i++){
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Rent: " + city.rent + "</h3>")
    .addTo(myMap);
  console.log(city.name);
};
