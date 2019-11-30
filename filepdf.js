const puppeteer = require('puppeteer');
const inquirer = require("inquirer");


inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  }).then(async({username})=> {

                     
    try {
        
          const browser = await puppeteer.launch({headless: true});
          const page = await browser.newPage();
    
                  const options = {
                      
                      path: 'Profile.pdf', 
                      format: 'A4',
                      printBackground: true
                  };

    
          await page.setViewport({width: 2300, height:1239});
          
          await page.goto('https://yugmani.github.io/gitprofile/', {waitUntil: 'networkidle2'});   

              
          await Promise.all([
      
                page.waitForSelector('#searchInput'),
                page.focus( '#searchInput'),
                
                page.evaluate( () => document.getElementById("searchInput").value = ""),
                page.evaluate((text) => {(document.getElementById('searchInput')).value = text; }, `${username}`, { delay: 1500 }),
              
               
          ])
            const button = ('#inputImage');
            await page.waitForSelector('#inputImage'),
            await page.focus( '#inputImage'),
            await page.evaluate((button) => {document.getElementById('inputImage').click(); }, button);
            
            await page.click('#inputImage', { delay: 1500 }), 

           
          
          await page.pdf(options);
          console.log("Pdf! Success!!");
          await browser.close();
  
  } catch(e){
        
    console.log("Here is error", e);
  }
    
});

