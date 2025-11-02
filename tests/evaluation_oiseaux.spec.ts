import { test, expect } from '@playwright/test';


test('tarin_triste', async ({ page }) => {
  await page.goto('https://ornitho.com');
  
  // Wait for the drop prompt to appear
  await page.waitForSelector('span.drop_prompt');
  
  // Find file input (it's usually a sibling or child of the drop container)
  const fileInput = page.locator('input[type="file"]').first();
  await fileInput.setInputFiles('/Users/nasif/Birds/tests/bird_data/tarin_triste.jpeg');
  
  //click on continue button
  await page.click('input.validez');

  //click on continue button on the second page
  await page.click('input.validez');

// Get both elements in parallel - much faster
const birdLink = page.locator('a.fiche', { hasText: 'Tarin triste' }).first();
const confidenceElement = page.locator('div.pour100esp').nth(1); // the percentage one

// Wait for both to be visible
await expect(birdLink).toBeVisible();
await expect(confidenceElement).toBeVisible();

// Then get the confidence text
const confidenceText = await confidenceElement.textContent() || '';
const confidencePercentage = parseFloat(confidenceText.replace('%', '').trim());
expect(confidencePercentage).toBeGreaterThanOrEqual(90);

});

//test chevalier_aboyeur

test('chevalier_aboyeur', async ({ page }) => {
  await page.goto('https://ornitho.com');
  
  // Wait for the drop prompt to appear
  await page.waitForSelector('span.drop_prompt');
  
  // Find file input (it's usually a sibling or child of the drop container)
  const fileInput = page.locator('input[type="file"]').first();
  await fileInput.setInputFiles('/Users/nasif/Birds/tests/bird_data/chevalier_aboyeur.jpeg');
  
  //click on continue button
  await page.click('input.validez');

  //click on continue button on the second page
  await page.click('input.validez');

// Get both elements in parallel - much faster
const birdLink = page.locator('a.fiche', { hasText: 'Chevalier aboyeur' }).first();
const confidenceElement = page.locator('div.pour100esp').nth(1); // the percentage one

// Wait for both to be visible
await expect(birdLink).toBeVisible();
await expect(confidenceElement).toBeVisible();

// Then get the confidence text
const confidenceText = await confidenceElement.textContent() || '';
const confidencePercentage = parseFloat(confidenceText.replace('%', '').trim());
expect(confidencePercentage).toBeGreaterThanOrEqual(90);

});

//test bergeronnette_printaniere

test('bergeronnette_printaniere', async ({ page }) => {
  await page.goto('https://ornitho.com');
  
  // Wait for the drop prompt to appear
  await page.waitForSelector('span.drop_prompt');
  
  // Find file input (it's usually a sibling or child of the drop container)
  const fileInput = page.locator('input[type="file"]').first();
  await fileInput.setInputFiles('/Users/nasif/Birds/tests/bird_data/bergeronnette_printaniere.jpeg');
  
  //click on continue button
  await page.click('input.validez');

  //click on continue button on the second page
  await page.click('input.validez');

// Get both elements in parallel - much faster
const birdLink = page.locator('a.fiche', { hasText: 'Bergeronnette printanière' }).first();
const confidenceElement = page.locator('div.pour100esp').nth(1); // the percentage one

// Wait for both to be visible
await expect(birdLink).toBeVisible();
await expect(confidenceElement).toBeVisible();

// Then get the confidence text
const confidenceText = await confidenceElement.textContent() || '';
const confidencePercentage = parseFloat(confidenceText.replace('%', '').trim());
expect(confidencePercentage).toBeGreaterThanOrEqual(70);

});
