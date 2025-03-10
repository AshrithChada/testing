const {test,expect}= require('@playwright/test');

test('KeyBoard Actions',async ({page})=>{
    await page.goto('https://gotranscript.com/text-compare');

    await page.fill('[name="text1"]','welcome to automation')

    await page.keyboard.press('Meta+A')
    await page.keyboard.press('Meta+C')

    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')


    await page.keyboard.press('Meta+V')

    await page.waitForTimeout(5000);
})