const puppeteer = require('puppeteer');

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  const browser = await puppeteer.launch({headless: true});
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

  await page.pdf({
    path: 'cv-yannick-poirier-en.pdf', 
    format: 'a4', 
    printBackground: true, 
    displayHeaderFooter: true,
    headerTemplate: ``,
    footerTemplate: `
    <div style="width: 100%; font-size: 8px;
        padding: 5px 5px 0; color: #bbb; position: relative;">
        <div style="position: absolute; right: 5px; top: 5px;">Y.P <span class="pageNumber"></span>/<span class="totalPages"></span></div>
    </div>
  `,
  margin: { bottom: '20px' },
})
  await browser.close();
})();


