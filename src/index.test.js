const puppeteer = require('puppeteer');

// increase the timeout because of the loading page
jest.setTimeout(30000);

let page, browser;

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1024,
      height: 768
    }
  })

  page = await browser.newPage();
  await page.goto('https://www.linguee.com/');
})

afterEach(async () => {
  await browser.close();
})

test('we can launch a browser', async () => {
  const text = await page.$eval('.wide_in_main div[class^=sectioncontent] .textleft h3', el => el.innerHTML);

  expect(text).toEqual('A gateway to the world')
})





