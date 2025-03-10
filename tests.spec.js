const {test,expect}= require('@playwright/test');

test('test',async ({page}) =>{
    await page.goto('https://www.redbus.in/');

    await page.locator('#src').fill('Hyderabad');

    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");

    const options=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");

    for(let o of options){
        const value=await o.textContent();
        console.log(value);
    }
})

test('Dialog', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('Dialog or Alerts', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.click('button[id$="alertBtn"]');
    await page.waitForTimeout(5000);
})