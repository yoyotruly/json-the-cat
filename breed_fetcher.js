const request = require("request");

const breedFetcher = breed => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }

    const data = JSON.parse(body);
    if (!data.length) {
      console.log("Breed not found.");
    } else {
      console.log(data[0].description);
    }
  });
};

const breed = process.argv.slice(2);
breedFetcher(breed);
