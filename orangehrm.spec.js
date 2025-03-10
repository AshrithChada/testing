const {test,expect}= require('@playwright/test');

test('SignIn',async ({page})  =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const username="Admin";
    const password="admin123";

    await expect(page.getByPlaceholder("username")).toBeVisible();  //check username is visible or not
    await page.getByPlaceholder("username").type(username); 
               
    await expect(page.getByPlaceholder("password")).toBeVisible();       //check password is visible or not
    await page.getByPlaceholder("password").type(password);

    await expect(page.locator(".oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button")).toBeVisible(); //sign in button visibility
    await expect(page.locator(".oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button")).toBeEnabled(); //sign in button enabled?

    await page.click(".oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button");            //click sign in

    const errormsg= await page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text");
    if(username!="Admin" || password!="admin123"){
        await expect(errormsg).toContainText('Invalid credentials');          //check error message is displayed
    }
    if(username=="Admin" && password=="admin123"){
        await expect(page.locator(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")).toBeVisible(); 
    }

    await page.waitForTimeout(5000);
} );