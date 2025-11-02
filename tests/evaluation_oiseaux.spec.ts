import { test, expect } from '@playwright/test';
import path from 'node: path';

// Consolidated bird identification tests
test.describe('Bird Recognition Tool - Ornitho.com', () => {
  const birds = [ 
    { file: 'tarin_triste.jpeg', expectedName: 'Tarin triste' },
    { file: 'chevalier_aboyeur.jpeg', expectedName: 'Chevalier aboyeur' },
    { file: 'bergeronnette_printaniere.jpeg', expectedName: 'Bergeronnette printanière' },
  ];

  for (const bird of birds) { 
    test(`Recognize ${bird.expectedName} with confidence >=90%`, async ({ page }) => {
      await page.goto('https://ornitho.com');
      
      // Wait for upload area
      await page.waitForSelector('span.drop_prompt', { timeout: 10000 });  // Increased timeout for reliability
      
      // Relative path (adjust if folder is different)
      const imagePath = path.join(process.cwd(), 'tests/bird_data', bird.file);
      
      // Upload
      const fileInput = page.locator('input[type="file"]').first();
      await fileInput.setInputFiles(imagePath);
      
      // Click continue (add wait for navigation)
      await page.click('input.validez');  // Assume this is the first "Valider" button
      await page.waitForLoadState('networkidle');
      
      // Second continue
      await page.click('input.validez');
      await page.waitForLoadState('networkidle');
      
      // Get elements in parallel
      const birdLink = page.locator('a.fiche', { hasText: bird.expectedName }).first();
      const confidenceElement = page.locator('div.pour100esp').nth(1);  // Confidence percentage
      
      // Assert visibility
      await expect(birdLink).toBeVisible();
      await expect(confidenceElement).toBeVisible();
      
      // Parse and assert confidence
      const confidenceText = (await confidenceElement.textContent()) || '';
      const confidencePercentage = parseFloat(confidenceText.replace('%', '').trim());
      expect(Number.isNaN(confidencePercentage) ? 0 : confidencePercentage).toBeGreaterThanOrEqual(90);
      
      // Log for analysis (always, or on failure via hook)
      console.log(`Image: ${bird.file} | Recognized Name Visible: Yes | Confidence: ${confidencePercentage}%`);
      
      // Optional: Screenshot on success/failure
      await page.screenshot({ path: `results/${bird.file}-result.png` });
    });
  }
});
