// index.js
const { fetchMyIP, fetchCoordsByIP  } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

// fetchCoordsByIP(('99.232.103.31'), (error, coordinates) => {
//   if (error) {
//     console.log('It didn not work!', error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:', coordinates);
// });