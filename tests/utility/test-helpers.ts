import { TestSettings } from './test-settings';
import { Page } from '@playwright/test';

export class TestHelpers {
  constructor(
    public page: Page, 
    public settings: TestSettings
  ) {
    this.page = page;
    this.settings = settings;
  }
}
