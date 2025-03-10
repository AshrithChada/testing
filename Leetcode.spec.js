const {test,expect}= require('@playwright/test');

test('LinkedIn Sign Up',async ({page})=>{
    test.setTimeout(0);
    await page.goto('https://leetcode.com/');

    await page.click(".btn.sign-up-btn.hover-panel.round");  //click Join now

    const username="Ashrith"
    const email="chadaashrith@gmail.com";
    const password="Abcd@1234";
    const emailpattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    await expect(page.getByPlaceholder("Username")).toBeVisible();     //check username is visible or not
    await page.getByPlaceholder("Username").type(username);

    await expect(page.locator("//*[@id='app']/div/div[4]/div/div[2]/div/div/div/form/span[2]/input")).toBeVisible();    //check password is visible or not
    await page.locator("//*[@id='app']/div/div[4]/div/div[2]/div/div/div/form/span[2]/input").fill(password);
    //expect(passwordpattern.test(password)).toBe(true);

    await expect(page.getByPlaceholder("Confirm password")).toBeVisible();     //check confirm password is visible or not
    await page.getByPlaceholder("Confirm password").type(password);
    
    await expect(page.getByPlaceholder("E-mail address")).toBeVisible();     //check email is visible or not
    await page.getByPlaceholder("E-mail address").type(email);
    expect(emailpattern.test(email)).toBe(true); 

    await expect(page.locator(".btn__3Y3g.fancy-btn__2prB.primary__lqsj.light__3AfA.btn__1z2C.btn-md__M51O")).toBeVisible();  //check if SignUp button is visible
   // const checkbox=await page.locator("//*[@id='uATa8']/div/label/input");
   // await checkbox.check();
    //await checkbox.waitFor({state:'checked'});

    await page.click(".btn__3Y3g.fancy-btn__2prB.primary__lqsj.light__3AfA.btn__1z2C.btn-md__M51O"); //click sign up
    await expect(page.locator(".h-full.w-full")).toBeVisible();

    await page.waitForTimeout(1000);
    
})