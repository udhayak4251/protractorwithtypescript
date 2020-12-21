import { browser, by, element } from "protractor";
describe("Basic Test", () => {
  it("Test 1 ", async () => {
    browser.waitForAngularEnabled(false);
    await browser.get("https://www.npmjs.com/package/protractor");
    await browser
      .actions()
      .mouseMove(element(by.xpath("//a[contains(text(), 'Contact npm')]")))
      .click()
      .perform();
    await browser.sleep(2000);
    const value = await element(
      by.xpath("//a[contains(text(), 'Sign in for assistance')]")
    ).getText();
    expect(value).toBe("Sign in for assistance");
  });
});
