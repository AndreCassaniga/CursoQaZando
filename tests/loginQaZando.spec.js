// @ts-check
const { test, expect } = require('@playwright/test');
const { before } = require('node:test');

test.beforeEach (async ({ page }) => {
  await page.goto('https://automationpratice.com.br/'); 

});


test('Login com sucesso @login', async ({ page }) => {
  //const clock = sinon.useFakeTimers(new Date('2024-05-01T12:00:00Z').getTime());
  
  const texto = await page.waitForSelector('text=NEWSLETTER');
  //const texto = await page.locator('text=NEWSLETTER').waitFor();
  await texto.scrollIntoViewIfNeeded();
  //const buttonSendMail = await page.getByRole('button', { name: 'Send Mail' });
  //await buttonSendMail.scrollIntoViewIfNeeded();
  //await buttonSendMail.click();


  await page.getByRole('link', { name: ' Login' }).click();

  await page.locator('#user').click();
  await page.locator('#user').fill('cassa@bug.com.br');
  await page.screenshot({ path: 'Prints/screenshot.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'Prints/screenshot1.png' });
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toContainText('Login realizado');
  //clock.restore(); 
});

test('Login com sucesso1 @login', async ({ page }) => {
  //const clock = sinon.useFakeTimers(new Date('2024-05-01T12:00:00Z').getTime());

  await page.getByRole('link', { name: ' Login' }).click();

  await page.locator('#user').click();
  await page.locator('#user').fill('cassa@bug.com.br');
  await page.screenshot({ path: 'Prints/screenshot.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'Prints/screenshot1.png' });
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toContainText('Login realizado');
  //clock.restore(); 
});

test('Login com sucesso2', async ({ page }) => {
  //const clock = sinon.useFakeTimers(new Date('2024-05-01T12:00:00Z').getTime());

  await page.getByRole('link', { name: ' Login' }).click();

  await page.locator('#user').click();
  await page.locator('#user').fill('cassa@bug.com.br');
  await page.screenshot({ path: 'Prints/screenshot.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'Prints/screenshot1.png' });
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toContainText('Login realizado');
  //clock.restore(); 
});

test.afterEach (async ({ page }) => {

 await page.getByRole('button', { name: 'OK' }).click();
// teste

});
