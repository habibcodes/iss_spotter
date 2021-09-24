// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

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

const sightTime = (flyOverData) => {
  for (const flyover of flyOverData) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(flyover.risetime);
    const duration = flyover.duration;
    console.log(`Next flyover at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, flyOverTime) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  sightTime(flyOverTime);
});