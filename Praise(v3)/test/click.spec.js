const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://localhost:3000/index/index');

    await driver.findElement(By.className('table')).click();
    await driver.findElement(By.className('table')).click();
    await driver.findElement(By.className('table')).click();
  } finally {
  
  }
})();
// const {Builder, By, Key, until} = require('selenium-webdriver');

// (async function example() {
//   let driver = await new Builder().forBrowser('firefox').build();
//   try {
//     await driver.get('https://www.baidu.com');
//     await driver.findElement(By.name('wd')).sendKeys('剑来', Key.RETURN);
//     await driver.wait(until.titleIs('node - 百度搜索'), 1000);
//   } finally {
//     await driver.quit();
//   }
// })();