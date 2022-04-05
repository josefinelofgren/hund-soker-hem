import React from 'react';
import puppeteer from 'puppeteer';

describe('renders without crashing', () => {
  test(
    'we view the welcome h1 header',
    async () => {
      let browser = await puppeteer.launch({
        headless: true,
      });
      let page = await browser.newPage();

      await page.goto('http://localhost:3030');
      await page.waitForSelector('.welcome-message');

      const header = await page.$eval('h1', e => e.innerHTML);
      expect(header).toEqual('Awesome that you want to apply!');

      browser.close();
    },
    16000
  );
});