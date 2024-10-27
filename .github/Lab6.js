function addMap() {
    var map = L.map('map').setView([38.79, -106.53], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var mark1 = L.marker([lat1, long1]).addTo(map);
    var mark2 = L.marker([lat2, long2]).addTo(map);
    var mark3 = L.marker([lat3, long3]).addTo(map);
    console.log(mark1)
    console.log(mark2)
    console.log(mark3)
}

// 38.7946° N, 106.5348° W

window.onload = addMap;


function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }
const lat1 = getRandomInRange(30, 35, 3); //lat 
const long1 = getRandomInRange(-90, -100, 3); // 
console.log(lat1)
console.log(long1)

const lat2 = getRandomInRange(30, 35, 3); //lat 
const long2 = getRandomInRange(-90, -100, 3); // long
console.log(lat2)
console.log(long2)

const lat3 = getRandomInRange(30, 35, 3); //lat 
const long3 = getRandomInRange(-90, -100, 3); // long
console.log(lat3)
console.log(long3)

document.getElementById("marker1").innerText="Marker 1: Latitude: " + lat1 + ", "+ "Longitude: " + long1;
document.getElementById("marker2").innerText="Marker 2: Latitude: " + lat2 + ", "+ "Longitude: " + long2;
document.getElementById("marker3").innerText="Marker 3: Latitude: " + lat3 + ", " + "Longitude: " + long3;

// document.getElementById("marker2").innerText="Computer Chose:" + computerChoice;
// document.getElementById("marker3").innerText="Computer Chose:" + computerChoice;
 

// const lat getRandomInRange(30, 35, 3); //latitude coordinates 
// const long getRandomInRange(-90, -100, 3); //longitude corrdinates 