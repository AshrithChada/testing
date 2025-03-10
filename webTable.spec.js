const {test,expect}= require('@playwright/test');

test('test',async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table=await page.locator('#productTable');

    const columns=await table.locator('thead tr th');
    console.log(await columns.count());
    expect(await columns.count()).toBe(4);

    const rows=await table.locator('tbody tr');
    console.log(await rows.count());
    expect(await rows.count()).toBe(5);

    await selectProduct(rows,page,'Tablet');
    await selectProduct(rows,page,'Laptop');
    await selectProduct(rows,page,'Smartwatch');

    const pages=await page.locator('.pagination li a');
    console.log(pages.count());

    for(let p=0;p< await pages.count();p++){
        if(p>0){
            await pages.nth(p).click();
        }

        for(let i=0;i<await rows.count();i++){
            const row=rows.nth(i);
            const tds=row.locator('td');
            for(let j=0;j< await tds.count()-1;j++){
                console.log(await tds.nth(j).textContent());
            }
        }

        await page.waitForTimeout(3000);
    }

    await page.waitForTimeout(3000);
})

async function selectProduct(rows,page,name){
    const matchedrow =await rows.filter({
        has: page.locator('td'),
        hasText:name
    })
    await matchedrow.locator('input').check();

}