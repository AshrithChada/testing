const {test,expect}= require('@playwright/test');

test('Date Picker',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

//    await page.fill('#datepicker','03/14/2025');

    const month="June";
    const date="12";
    const year="2025";
    
    await page.click('#datepicker');
    while(true){
        const curryear=await page.locator('.ui-datepicker-year').textContent();
        const currmonth=await page.locator('.ui-datepicker-month').textContent();
       // const date=await page.locator('')
        if(curryear==year && currmonth==month){
            break;
        }
        await page.locator('[title="Next"]').click();
    }
    
    const dates =await page.$$('.ui-state-default');

    for(const dt of dates){
        if(await dt.textContent()==date){
            await dt.click();
            break;
        }
    }
    

    await page.waitForTimeout(5000);
})