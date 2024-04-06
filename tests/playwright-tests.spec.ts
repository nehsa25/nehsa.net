import { test, expect } from '@playwright/test';
import { TestSettings } from './utility/test-settings';

let testSettings:TestSettings = new TestSettings(null);

// verify headers titles
for (const pageDefinition of testSettings.PAGE_DEFINITIONS) {
  test(`nehsa.net: Page \"${pageDefinition.name}\" has correct header`, async ({ page }) => {
    let testpage = new pageDefinition(page, testSettings);
    await testpage.goto();
    await expect(page.getByTestId('header-title')).toContainText(testpage.headerTitle, { ignoreCase: false, timeout: testSettings.defaultTimeoutMs });
  });
}
