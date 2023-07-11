const { Builder, By, Key } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
require("chromedriver");
require("dotenv").config();

async function myFirstSeleniumTest() {
  // Set Chrome options
  const email = process.env.USER_EMAIL;
  const password = process.env.PASSWORD;

  // Enable logging for the WebDriver instance
  let chromeOptions = new chrome.Options();
  chromeOptions.setLoggingPrefs({ browser: "ALL" });

  //To wait for browser to build and launch properly

  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();
  //To fetch http://google.com from the browser with our code.
  await driver.get("http://dev.dcarb.com");

  //To send a search query by passing the value in searchString.
  await driver.findElement(By.css('[data-testid="input"]')).sendKeys(email);
  await driver.findElement(By.css('[type="password"]')).sendKeys(password);
  await driver.findElement(By.css('[type="submit"]')).click();

  //Verify the page title and print it
  var title = await driver.getTitle();
  console.log("Title is:", title);

  //It is always a safe practice to quit the browser after execution
  //   await driver.quit();
}

myFirstSeleniumTest();
