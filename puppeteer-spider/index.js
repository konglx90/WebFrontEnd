const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];

const rootUrl = 'https://so.m.jd.com/ware/search.action?keyword=%E5%8D%8E%E4%B8%BA&searchFrom=search';

const TITLE_INFO_SELECTOR = '.big-shop-content > .title';

(async () => {
  console.log('start browser');
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
    headless: false,
    slowMo: 300 // slow down by 250ms
  });
  const page = await browser.newPage();
  await page.emulate(iPhone);
  await page.goto(rootUrl);
  await page.setViewport({
    width: 375,
    height: 667,
  })

  const title = await page.evaluate((sTitle) => {
    let x = 500;
    const timer = setInterval(() => {
      window.scrollTo(0, x);
      x += 200;
      if (x > 2000) {
        clearInterval(timer);
      }
    }, 1000)

    return Array.prototype.slice.apply(document.querySelectorAll(sTitle))
      .map($title => {
        return $title.innerHTML;
      })
  }, TITLE_INFO_SELECTOR);

  await page.waitFor(10000);

  // await page.click('[report-eventparam="1000004259"]');

  console.log('goto page jd done', title);
  await page.screenshot({
    path: 'screenshots/example.png',
    fullPage: true,
  });

  // await browser.close();
})();
