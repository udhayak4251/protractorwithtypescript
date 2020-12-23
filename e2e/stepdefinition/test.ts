import { Given, When, Then } from "cucumber";
import { browser, by, element, Key } from "protractor";

Given("The application is launched", async function () {
  await browser.waitForAngularEnabled(false);
  await browser.get("https://www.npmjs.com/package/protractor-cucumber-framework");
  return;
});

When("The user navigates to contact us page", async function () {
  await browser.actions().mouseMove(element(by.xpath("//a[contains(text(), 'Contact npm')]"))).click().perform();
  return;
});

Then("Browser title should be contact us", async function () {
  const title = await browser.getTitle();
  console.log(title);
  
  return;
});
