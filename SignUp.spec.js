const {test,expect}= require('@playwright/test');

test('SignUp',async ({page})  =>{
    test.setTimeout(1000000);
    await page.goto("https://www.geeksforgeeks.org/");
    await page.click(".signinButton.gfg_loginModalBtn.login-modal-btn");      //sign in button on homepage
    await page.click("//*[@id='login']/div/div[2]/div/div[2]");               //sign up button

    const username="chadaashrith@gmail.com";
    const password="Abcd@1234";
    const usernamepattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    await expect(page.getByPlaceholder("E-mail")).toBeVisible();               //check username is visible or not
    await page.getByPlaceholder("E-mail").type(username);
    expect(usernamepattern.test(username)).toBe(true);                        //username validation

    await expect(page.getByPlaceholder("Password")).toBeVisible();            //check password field is visible or not
    await page.getByPlaceholder("Password").type(password);       

    await page.getByPlaceholder("Institutes/Organizations").type("ARIQT");

//    await expect(page.locator("//*[@id='login']/div/div[2]/div/div[3]/button/span")).toBeVisible(); //
//    await expect(page.locator("//*[@id='login']/div/div[2]/div/div[3]/button/span")).toBeEnabled(); //

//    await page.click(".recaptcha-checkbox-border");

    await page.click("//*[@id='login']/div/div[2]/div/div[3]/button/span");   //click sign up

    const errormsg= await page.locator(".alert.alert-danger");
    const usererror=await page.locator("//*[@id='login']/div/div[2]/div/div[3]/div[1]/div");

    if((await errormsg.textContent()=='Captcha validation failed')){
        await page.locator('.recaptcha-checkbox.goog-inline-block.recaptcha-checkbox-unchecked.rc-anchor-checkbox.recaptcha-checkbox-checked.recaptcha-checkbox-hover').waitFor({state:'visible'});
    }

    await page.click("//*[@id='login']/div/div[2]/div/div[3]/button/span");   //click sign up
    await expect(page.locator(".signnButton.gfg_loginModalBtn.login-modal-btn")).not.toBeVisible(); //expect sign in button to be not visible

/* 
    if(password.length<8){
        await expect(errormsg).toContainText('Password can not be less than 8 characters.');
    } 
    else if(usererror.isVisible()){
        await expect(usererror).toContainText('User email Exists.');
    }npx playwright test tests/SignUp.spec.js --headed --project chromium
    else if(errormsg.isVisible()){
        await expect(errormsg).toContainText('Captcha validation failed');          //check error message is displayed
    }
    else{
    
    }*/

    await page.waitForTimeout(5000);
} );
