import { test, expect } from '@playwright/test';

test.describe('Exercise 1 - WRAR', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="/exercice1"]');
  });

  test('should show wrar when button is clicked', async ({ page }) => {
    const button = page.locator('.dino-button');

    await button.click();
    
    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('WRAR!');
      await dialog.accept();
    });
  });
});