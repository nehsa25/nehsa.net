import { test, expect } from '@playwright/test';
import { TestSettings } from './utility/test-settings';
import { routes } from '../src/app/app.routes';
import { Route } from '@angular/router';

let testSettings: TestSettings = new TestSettings(null);

/** A paramaterized function which checks each page has the correct page title */
for (const pageDefinition of testSettings.PAGE_DEFINITIONS) {
  test(`nehsa.net: Page \"${pageDefinition.name}\" has correct title`, async ({ page }) => {
    let testpage = new pageDefinition(page, testSettings);
    await testpage.goto();
    await expect(page).toHaveTitle(testpage.title, { timeout: testSettings.defaultTimeoutMs });
  });
}

/** A paramaterized function which checks each page as the correct header at the top of the card */
for (const pageDefinition of testSettings.PAGE_DEFINITIONS) {
  test(`nehsa.net: Page \"${pageDefinition.name}\" has correct header`, async ({ page }) => {
    let testpage = new pageDefinition(page, testSettings);
    await testpage.goto();
    await expect(page.getByTestId('header-title')).toContainText(testpage.headerTitle, { ignoreCase: false, timeout: testSettings.defaultTimeoutMs });
  });
}

/** Confirms each page renders in x time */
for (const duration of testSettings.PAGE_LOAD_DURATIONS_SECS) {
  for (const pageDefinition of testSettings.PAGE_DEFINITIONS) {
    test(`nehsa.net: Page \"${pageDefinition.name}\" renders in ${duration} `, async ({ page }) => {
      let testpage = new pageDefinition(page, testSettings);
      await testpage.goto();
      await expect(page).toHaveTitle(testpage.title, { timeout: duration * 1000 });
    });
  }
}

/** Confirms all pages are being tested */
test(`nehsa.net: Confirm all pages are being tested`, async ({ page }) => {
  for (const testpage in testSettings.PAGE_DEFINITIONS) {
    console.log(testpage);
  }    
});
