import scrape from './index'
import { GetBrowser } from './interfaces/scraper.interface'

scrape(async (getBrowser: GetBrowser) => {
    const browser = await getBrowser();
    const page = await browser.newPage();
    await page.goto('https://finance.yahoo.com/world-indices');
    await page.waitForTimeout(5000); // wait for 5 seconds
    await browser.close();
}, { headless: false })