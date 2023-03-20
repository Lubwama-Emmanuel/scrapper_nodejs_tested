const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const { matchCompanyLink, matchEmail } = require("../helpers/regex");

exports.googleScrapper = async (name) => {
  const url = `https://www.google.com/search?q=${name}`;
  const links = [];
  let companyWebsiteLink
  // 1) Make a search to google and return the company webLink
  await axios
    .get(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      $("a").each(function () {
        const link = $(this).attr("href");
        links.push(link);
      });

      for (const link of links) {
        websiteLink = matchCompanyLink(link, name);
        if (websiteLink == null) {
          continue;
        } else {
          companyWebsiteLink = websiteLink[0];
        }
      }
      console.log(companyWebsiteLink);
    })
    .catch((err) => {
      console.log("An error occured trying to scrap", err);
    });
    return companyWebsiteLink;
};

exports.scrapeCompanyWebsite = async (link) => {
  const links = [];
  let companyEmail
  await axios.get(link).then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    $("a").each(function () {
      const link = $(this).attr("href");
      links.push(link);
    });

    for (const link of links) {
      email = matchEmail(link)
      if (email == null){
        continue
      } else {
        companyEmail = email[0]
      }
    }
  }).catch((err) => {
    console.log("An error occured trying to scrap for email", err);
  });
  console.log(companyEmail)
  return companyEmail
};
