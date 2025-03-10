const {test,expect}= require('@playwright/test');

test('SignIn',async ({page})  =>{
    await page.goto("https://www.geeksforgeeks.org/");

    await page.click(".signinButton.gfg_loginModalBtn.login-modal-btn");   //click SignIn  on homepage

    const username="ashrithchada@26gmail.com";
    const password="Jan262k+4";
    const unpattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    await expect(page.getByPlaceholder("Username or email")).toBeVisible();  //check username is visible or not
    await page.getByPlaceholder("Username or email").type("ashrithchada26@gmail.com"); 
               
    expect(unpattern.test(username)).toBe(true); //username validation

    await expect(page.getByPlaceholder("Password")).toBeVisible();       //check password is visible or not
    await page.getByPlaceholder("Password").type("Jan26k+4");


    await expect(page.locator("//*[@id='login']/div/div[2]/div/div[3]/button")).toBeVisible(); //sign in button visibility
    await expect(page.locator("//*[@id='login']/div/div[2]/div/div[3]/button")).toBeEnabled(); //sign in button enabled?


    await page.click(".loginBtn.btnGreen.notSocialAuthBtn");            //click sign in

    const errormsg= await page.locator(".alert.alert-danger");
    if(errormsg.isVisible()){
        await expect(errormsg).toContainText('Incorrect login credentials i.e userHandle/email or password');          //check error message is displayed
    }
    else{
        await expect(page.locator(".signinButton.gfg_loginModalBtn.login-modal-btn")).not.toBeVisible(); //expect sign in button to be not visible
    }

    await page.waitForTimeout(5000);
} );
