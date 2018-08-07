const puppeteer = require('puppeteer');

(asynch function main() {
  try {

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36');

    await page.goto('https://experts.shopify.com/');
    await page.waitForSelector('.section');

    console.log('It\'s Showing');

  } catch (e) {
      console.log('our error', e);
  }
})();
