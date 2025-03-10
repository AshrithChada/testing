import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/auth/signin');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Authenticate with Microsoft' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('img', { name: 'Organization banner logo' }).click();
  await page1.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.getByText('If you need help contact to').click();
  await page1.getByRole('button', { name: 'Sign-in options undefined' }).click();
  await page1.getByRole('button', { name: 'Back' }).click();
  await page1.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
  await page1.getByRole('link', { name: 'Can’t access your account?' }).click();
  await page1.getByRole('button', { name: 'Work or school account' }).click();
  await page1.getByRole('button', { name: 'Cancel' }).click();
  await page1.locator('#lightbox > div:nth-child(2)').click();

  await page.getByRole('button', { name: 'Authenticate with Microsoft' }).click();
  await page.getByText('Could not login').click();
  await page.getByRole('img', { name: 'close-circle' }).locator('path').click();
});
