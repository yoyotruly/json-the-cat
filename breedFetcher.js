const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null); // invoke callback, desc arg = null
    }

    const data = JSON.parse(body);
    if (!data.length) {
      callback(null, "Breed not found."); // invoke callback, error arg = null
    } else {
      callback(null, data[0].description); // invoke callback, error arg = null
    }
  });
};

module.exports = fetchBreedDescription;