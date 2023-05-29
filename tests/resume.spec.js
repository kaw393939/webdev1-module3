// @ts-check
const { test, expect } = require('@playwright/test');

const resumeURL = 'http://localhost:3000'; // Replace with the URL of the student's resume page

test('Check Name Heading', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('h1')).toBeVisible();
});

test('Check Email Link', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('a[href^="mailto:"]')).toBeVisible();
});

test('Check Education Section', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('section h2:has-text("Education")')).toBeVisible();
});

test('Check Skills Section', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('section h2:has-text("Skills")')).toBeVisible();
});
