const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://codeforces.com');
    await page.screenshot({path: 'cf.png'});
    await browswer.close();
})();
