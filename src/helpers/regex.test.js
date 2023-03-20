const { matchCompanyLink, matchEmail } = require("./regex");

describe("Regex Functions", () => {
  test("Match company website link", () => {
    const result = matchCompanyLink(
      "rl?q=https://www.mukwano.com/product-categories",
      "mukwano"
    );
    expect(result[0]).toBe("https://www.mukwano.com")
  });

  test("Match company email", () => {
    const result = matchEmail("mailTo:customercare@mukwano.com")
    expect(result[0]).toBe("customercare@mukwano.com")
  })

});
