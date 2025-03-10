const {test,expect}= require('@playwright/test');

test('frames',async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames');

    const allframes=await page.frames();
    console.log(allframes.length);

    const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1.fill("[name='mytext1']",'Hello');

    const frame2=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    const childFrames=await frame2.childFrames();
    childFrames[0].locator("//*[@id='i6']/div[3]/div").check();

    await page.waitForTimeout(5000);
})