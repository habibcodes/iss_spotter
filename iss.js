// Implement iss_spotter //

// dependency
const request = require('request');

// fetch IP address
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = (callback) => {
  // use request to fetch IP address from JSON API

  request('https://api.ipify.org/?format=json', (error, response, body) => {
    // error
    if (error) {
      callback(error.message, null);
      return;
    }
    
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

    const ip = JSON.parse(body).ip;
    console.log(ip);
  });
};


module.exports = { fetchMyIP };
// fetch geo coordinates (Lat and Long) for our IP
// fetch next ISS flyovers for our geo coordinates

