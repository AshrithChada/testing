const {test,expect}= require('@playwright/test');

test('Demo', async ({page})=>{
    await page.goto("https://www.linkedin.com/onboarding/start/profile-location/new/");
    
    await expect(page.locator("#typeahead-input-for-location")).toBeVisible();
    await page.locator("#typeahead-input-for-location").type("Hyderabad");
    const firstSuggestion = page.locator('.typeahead-results li:first-child'); // Adjust based on actual DOM
    await firstSuggestion.click()
})
