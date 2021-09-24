// Implement iss_spotter //

// dependency
const request = require('request-promise-native');

// fetch IP address
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = () => {
  // use request to fetch IP address from JSON API
  return request('https://api.ipify.org/?format=json');
};

// fetch geo coordinates (Lat and Long) for our IP
const fetchCoordsByIP = (ip) => {
  return request(`https://freegeoip.app/json/${ip}`);
};

// fetch next ISS flyovers for our geo coordinates
const fetchISSFlyOverTimes = (coords) => {
  const url = `https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;
  return request(url);
};

const sightTime = (flyOverData) => {
  for (const flyover of flyOverData) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(flyover.risetime);
    const duration = flyover.duration;
    console.log(`Next flyover at ${datetime} for ${duration} seconds!`);
  }
};

//
const nextISSTimesForMyLocation = () => {
  fetchMyIP()
    .then((val) => JSON.parse(val).ip)
    .then(fetchCoordsByIP)
    .then((val) => JSON.parse(val))
    .then(fetchISSFlyOverTimes)
    .then((val) => JSON.parse(val).response)
    .then(sightTime);
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
};