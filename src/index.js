const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: false,
      
      defaultViewport: {
          width: 1024,
          height: 768
      }
  });
  const page = await browser.newPage();
  await page.goto('url');
  let element = await page.waitForSelector('#nav-header-menu a:nth-child(2)');
  await element.click();

  element = await page.waitForSelector('#user_id');
  await element.click();

  await page.keyboard.type('user');

  element = await page.waitForSelector('.auth-button--user');
  await element.click();

  element = await page.waitForSelector('#password');
  await element.click();
  
  await page.keyboard.type('pass');

  element = await page.waitForSelector('.auth-button--password');
  await element.click();


  await browser.close();
})();