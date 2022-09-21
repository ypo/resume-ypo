const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
  await page.goto('http://localhost:3000/pdf', {
    waitUntil: 'networkidle0', timeout: 2000
  });
} catch(e){}

  await page.pdf({path: 'ypo.pdf', format: 'a4'});

  await browser.close();
})();


