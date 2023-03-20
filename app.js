const scrapper = require("./src/scrappers/scrapper");
const fs = require("fs");

console.log("App is running");

const fileContent = fs.readFileSync("./companies.txt", "utf-8");
const companies = fileContent.split("\r\n");

async function callThem(name) {
  const link = await scrapper.googleScrapper(name);
  const email = await scrapper.scrapeCompanyWebsite(link);
  console.log("Here is the email", email);
  console.log("Here is the link", link);
  fs.appendFile(
    "./got.txt",
    `Company:${name} Email:${email}\n`, "utf-8",
    function (err) {
        if (err) {
            console.log("An error occured trying to save company details")
        }
    }
  );
}

for (const company of companies) {
  callThem(company);
}
