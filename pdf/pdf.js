const puppeteer = require('puppeteer');

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  try {
  await page.goto('http://localhost:3000/pdf', {
    waitUntil: 'networkidle2'
  });
} catch(e){}

await page.evaluate(() => {
  // Scroll down to bottom of page to activate lazy loading images
  document.body.scrollIntoView(false);
});

await timeout(5000);

  await page.pdf({path: 'ypo.pdf', format: 'a4', printBackground: true});

  await browser.close();
})();


