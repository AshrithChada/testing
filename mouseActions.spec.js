const {test,expect}= require('@playwright/test');

test('Hover',async({page})=>{
    await page.goto('https://demo.opencart.com.gr/');

    const desktops=await page.locator('//*[@id="menu"]/div[2]/ul/li[1]/a');
    const macbook=await page.locator('//a[normalize-space()="Mac (1)"]');

    await desktops.hover()
    await macbook.hover()

    await page.waitForTimeout(5000);
})

test('Right Click',async ({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    
    const button=await page.locator('.context-menu-one btn btn-neutral');

    await button.click({button:'right'});

    await page.waitForTimeout(5000);
})


test('Double Click',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const copybtn=await page.locator('//button[normalize-space()="Copy Text"]');

    await copybtn.dblclick();

    const field2=await page.locator('#field2');
    const field1=await page.locator('#field1').textContent();
    await expect(field2).toHaveText(field1);

    await page.waitForTimeout(5000);
})

test('Mouse Drag and Drop',async ({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

    const drag=await page.locator('#box6');
    const drop=await page.locator('#box106');

 /* await drag.hover();
    await page.mouse.down();

    await drop.hover();
    await page.mouse.up();
    */

    await drag.dragTo(drop);

    await page.waitForTimeout(5000);
})