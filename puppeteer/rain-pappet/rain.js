const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://cocorahs.org/Login.aspx');

  await page.type('#txtUsername', 'kotawatanabe')
  await page.type('#txtPassword', 'mypassword')

  await Promise.all([
      page.waitForNavigation(),
      page.click('#btnLogin')
  ]);
  
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
