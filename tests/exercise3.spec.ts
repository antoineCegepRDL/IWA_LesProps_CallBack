import { test, expect } from '@playwright/test';

test.describe('Exercise 3 - Dino color', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="/exercice3"]');
  });


  test('should change dino color when button is clicked', async ({ page }) => {
    const dino = page.locator('svg');
    const buttons = page.locator('.dino-button');
    
    // Initial state
    await expect(dino.locator('ellipse:nth-child(1)[fill="green"]')).toBeVisible(); // Green color

    // Click on the red button
    await buttons.nth(2).click();

    // Expect the dino color to change to red
    await expect(dino.locator('ellipse:nth-child(1)[fill="red"]')).toBeVisible();

    await buttons.nth(0).click();

    // Expect the dino color to change to blue
    await expect(dino.locator('ellipse:nth-child(1)[fill="blue"]')).toBeVisible();
  });

});