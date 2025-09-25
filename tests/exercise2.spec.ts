import { test, expect } from '@playwright/test';

test.describe('Exercise 2 - Count clicks', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="/exercice2"]');
  });

  test('should increment click count when button is clicked', async ({ page }) => {
    const button1 = page.locator('.dino-button').first();
    const button2 = page.locator('.dino-button').nth(1);

    // Initial state
    await expect(button1).toHaveText('0');
    await expect(button2).toHaveText('0');

    // Click button 1
    await button1.click();
    await expect(button1).toHaveText('1');
    await expect(button2).toHaveText('1');

    // Click button 2
    await button2.click();
    await expect(button1).toHaveText('2');
    await expect(button2).toHaveText('2');
  });
});