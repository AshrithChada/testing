const {test,expect}= require('@playwright/test');

test('LinkedIn Sign Up',async ({page})=>{
    await page.goto('https://www.linkedin.com/home');

    await page.click(".nav__button-tertiary.btn-md.btn-tertiary");  //click Join now

    const username="ashrithchada2@gmail.com";
    const password="Abcd@1234";
    const usernamepattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    await expect(page.getByPlaceholder("Email or phone number")).toBeVisible();     //check username is visible or not
    await page.getByPlaceholder("Email or phone number").type(username);
    expect(usernamepattern.test(username)).toBe(true); 

    await expect(page.locator("#password")).toBeVisible();     //check username is visible or not
    await page.locator("#password").type(password);
    //expect(usernamepattern.test(password)).toBe(true);

  //  const checkbox=await page.locator("//input[@id='remember-me-checkbox']");
    //if(!(await checkbox.isChecked())){
      //  await checkbox.click();
    //}
    
    await expect(page.locator("#join-form-submit")).toBeVisible();  //check if SignUp button is visible
    await page.click("#join-form-submit");

    await expect(page.getByPlaceholder("First name")).toBeVisible();
    await page.getByPlaceholder("First name").type("Ashrith"); 

    await expect(page.getByPlaceholder("Last name")).toBeVisible();
    await page.getByPlaceholder("Last name").type("Chada"); 

    await expect(page.locator("#join-form-submit")).toBeVisible(); //check if Continue button is visible
    await page.click("#join-form-submit");

    await page.locator("#typeahead-input-for-location").waitFor();

    await expect(page.locator("#typeahead-input-for-location")).toBeVisible();
    await page.locator("#typeahead-input-for-location").type("Hyderabad");
    const firstSuggestion = page.locator('.typeahead-results li:first-child'); // Adjust based on actual DOM
    await firstSuggestion.click();

    await page.waitForTimeout(40000);
})