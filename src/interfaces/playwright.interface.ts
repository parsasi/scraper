
//Playwright doesn't seem to have types sadly
export interface PlaywrightBrowser {
    newPage: () => Promise<any>;
    close: () => Promise<void>;
}