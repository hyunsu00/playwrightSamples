// playwrightSample01.js
const { chromium } = require("playwright");
// playwright 모듈 불러오기
//import playwright from "playwright";
// chromium 불러오기
//const chromium = playwright.chromium;

// 동기 방식 사용하기 위해, async, await 사용하기
(async () => {
  // 브라우저 실행해서, 가져오기
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://www.naver.com/");
  await page.screenshot({ path: `naver.png`, type: "png", fullPage: true });
  // 브라우저 닫기
  await browser.close();
})();
