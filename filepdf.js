const puppeteer = require('puppeteer');
const inquirer = require("inquirer");
const fs = require('fs');

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  }).then(async({username})=> {

//const createPdf = async()=>{
    try {
        module.exports.username = username;
    const browser = await puppeteer.launch({headless: true});
   
    const page = await browser.newPage();
    

    await page.emulateMediaType('screen');

    

    await page.content('./index.html', {waitUntil:'networkidle2'} );
    
    await page.waitForSelector('#searchInput');
    
    await page.type('#searchInput', `${username}`);
    await page.waitForSelector('#inputImage');
    await page.click('#inputImage', {clickCount: 3});

    await page.waitForNavigation({waitUntil:'networkidle2'});
    
    //,


    
              const options = {
                path: 'myProfile.pdf', 
                format: 'Letter',
                printBackground: true
              };

    await page.pdf(options);
       
    console.log("Pdf is created. Success!");
    await browser.close();
  
} catch(e){
    console.log("Here is error", e);
}
    
});

// createPdf();


//https://yugmani.github.io/gitprofile/
// const fs = require('fs');
// const path = require('path');

//const username = 'fabpot';
//process.argv[2];
  // await page.removeListener('click' )
    // await Promise.all([ 
        
    //     // page.waitForNavigation({waitUntil:'networkidle2'}),
    //     //page.waitForNavigation(waitOptions),
    //     page.click('#inputImage', {clickCount: 1}),
    //     // page.click('#inputImage')
    // ])

    // await page.click('#inputImage')
    // await page.waitForNavigation({waitUntil:'domcontentloaded'}),
    
    //await page.click('#inputImage');

    // await Promise.all([
    //     page.waitForNavigation(),
    //     page.click('#inputImage')
    // ]);
    //await page.mouse.click('#inputImage', { delay: 1000 });

    // await page.waitForNavigation();