const puppeteer = require('puppeteer');

(async() => {
    const browswer = await puppeteer.launch();
    const page = await browswer.newPage();
    await page.goto('https://codeforces.com');
    await page.screenshot({path: 'cf.png'});
    await browswer.close();
})();