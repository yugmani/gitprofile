const puppeteer = require('puppeteer');


const createPdf = async()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const options = {
        path: './web.pdf', 
        format: 'A4',
        printBackground: true;
    };

    await page.goto('http://127.0.0.1:5500/index.html', { waitUntil:'networkidle2'});
    await page.pdf(options);

    await browser.close();
    
};

createPdf();