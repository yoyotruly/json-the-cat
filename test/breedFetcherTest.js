const { expect } = require("chai");
const fetchBreedDescription = require("../breedFetcher");


describe("fetchBreedDescription()", () => {

  it("should return a string of description when passed a valid breed name", (done) => {
    fetchBreedDescription("Siberian", (error, desc) => {
      expect(error).to.equal(null);
       
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      expect(desc.trim()).to.equal(expectedDesc);

      done();
    });
  });

  it("should return 'Breed not found' when passed an invalid breed name", (done) => {
    fetchBreedDescription("Catahoula", (error, desc) => {
      expect(error).to.equal("Breed not found.");
      expect(desc).to.equal(null);

      done();
    });
  });

});