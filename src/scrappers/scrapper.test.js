const scrapper = require("./scrapper");

describe("Scrapping tests", () => {
  test("Testing the google scrapper", async () => {
    const link = await scrapper.googleScrapper("mukwano");
    console.log("Result is:", link);
    expect(link).toBe("http://www.mukwanocoffee/");
  }, 10000);

  test("Testing the company website scrapper", async () => {
    const email = await scrapper.scrapeCompanyWebsite("http://www.mukwano.com");
    console.log("Result is:", email);
    expect(email).toBe("customercare@mukwano.com");
  }, 10000);
});
