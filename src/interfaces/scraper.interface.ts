

import { PlaywrightBrowser } from './playwright.interface'

export type GetBrowser = () => Promise<PlaywrightBrowser>;

export type Scraper = (getBrowser : GetBrowser) => Promise<any|void>;
