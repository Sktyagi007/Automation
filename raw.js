const puppeteer = require("puppeteer");

// headless false means it shows browser else it will run but in hidden mode
let browserPromise = puppeteer.launch({headless: false});
// browserPromise.then(function(browserInstance){
browserPromise.then(function(browser){
    console.log("browser Opened");
    // for new tab use new page
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function(page){
    console.log("page is opened");
    let urlPromise = page.goto("https://www.google.com/?gws_rd=ssl");
    return urlPromise;
}).then(function(){
    console.log("google is opened");
})