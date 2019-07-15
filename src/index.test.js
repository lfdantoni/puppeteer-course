const puppeteer = require('puppeteer');

jest.setTimeout(30000);

test('we can launch a browser', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1024,
      height: 768
    }
  })

  const page = await browser.newPage();
  await page.goto('https://www.linguee.com/');

  const text = await page.$eval('.wide_in_main div[class^=sectioncontent] .textleft h3', el => el.innerHTML);

  expect(text).toEqual('A gateway to the world')
  await browser.close();
})





