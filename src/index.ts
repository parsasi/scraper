const playwright = require('playwright');
import {Scraper} from './interfaces/scraper.interface';
import type {ScraperOptions} from './interfaces/scraper-options.interface';
export default async(scraper : Scraper , options ?: ScraperOptions) => {
    const getBrowser = async () => await playwright.chromium.launch(options  ?? {});
    scraper(getBrowser);
}



