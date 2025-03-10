const {test,expect}= require('@playwright/test');

test('Landing Page', async ({page})=>{
    await page.goto("http://localhost:5173/auth/signin");

    await expect(page.locator("._logo_66mzj_16")).toBeVisible(); //check logo

    //check dashboard elements arevisible or not
    await expect(page.locator("//*[@id='root']/div/div/header/ul/li[1]")).toBeVisible();   
    await expect(page.locator("//*[@id='root']/div/div/header/ul/li[1]")).toHaveText('Project Assignment');   

    await expect(page.locator("//*[@id='root']/div/div/header/ul/li[2]")).toBeVisible();    
    await expect(page.locator("//*[@id='root']/div/div/header/ul/li[2]")).toHaveText('Kudos');   

    await expect(page.locator("//*[@id='root']/div/div/header/ul/li[3]")).toBeVisible();
    await expect(page.locator("//*[@id='root']/div/div/header/ul/li[3]")).toHaveText('Expectations');   

    await expect(page.locator("//*[@id='root']/div/div/header/ul/li[4]")).toBeVisible();
    await expect(page.locator("//*[@id='root']/div/div/header/ul/li[4]")).toHaveText('PIP');

    
/*  await expect(page.locator(".ant-btn-icon")).toBeVisible();
    const pfp=await page.locator(".ant-btn-icon");
    await pfp.hover();
    page.waitForTimeout(1000);
*/

    //verify all texts on the page    
    await expect(page.locator("._title_1nalf_13")).toBeVisible();
    await expect(page.locator("._title_1nalf_13")).toHaveText('Welcome to Performly');  
    
    await expect(page.locator("p._subtitle_1nalf_19")).toBeVisible();
    await expect(page.locator("p._subtitle_1nalf_19")).toHaveText('A seamless way to manage and enhance your productivity.');   

    await expect(page.locator("._title_16wd8_1")).toBeVisible();
    await expect(page.locator("._title_16wd8_1")).toHaveText('Log In');   
   
    await expect(page.locator("._signupText_16wd8_16")).toBeVisible();
    await expect(page.locator("._signupText_16wd8_16")).toHaveText('Login using your Ariqt Microsoft account');
    
    //verify if log in button is enabled
    await expect(page.locator("//button[@type='button']")).toBeVisible();
    await expect(page.locator("//button[@type='button']")).toBeEnabled();

    //click on log in button
    await page.click("//button[@type='button']");
    const page1Promise = page.waitForEvent('popup');
    const page1 = await page1Promise;
    await expect(page1.getByRole('img', { name: 'Organization banner logo' })).toBeVisible();
    await page1.close();

    //check if correct popup msg is visible
    const errormsg=await page.getByText('Could not login');
    const loginmsg=await page.getByText('Logged in successfully');
    if(loginmsg.isVisible()){
        await expect(page.locator(".ant-layout-content.css-dev-only-do-not-override-vk6zek.css-var-r1")).toBeVisible();
    }
    else if(errormsg.isVisible()){
        await expect(page.locator("._signupText_16wd8_16")).toBeVisible(); 
    }

    await page.waitForTimeout(4000);
})