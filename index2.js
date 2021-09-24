// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss_promised');

/* fetchMyIP((error, ip) => {
  if (error) {
    console.log("Fetching IP address did not work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP(('99.232.103.31'), (error, coordinates) => {
  if (error) {
    console.log('Fetching geo-coordinates did not work!', error);
    return;
  }
  console.log('It worked! Returned coordinates:', coordinates);
});

const latLong = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(latLong, (error, flyOverData) => {
  if (error) {
    console.log('Fetching flyover times did not work!', error);
    return;
  }
  console.log('It worked! Returned flyover times:', flyOverData);
}); */



nextISSTimesForMyLocation();