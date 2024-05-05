// @ts-check


const { test, expect } = require('@playwright/test');

const sinon = require('sinon');


test('Teste muda Hora', async ({ page }) => {
  //const clock = sinon.useFakeTimers(new Date('2024-05-01T12:00:00Z').getTime());
  const clock = sinon.useFakeTimers({
    now: new Date('2022-10-10T12:00:00Z').getTime(),
    shouldClearNativeTimers: true
  
  });
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('cassa@bug.com.br');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toContainText('Login realizado');
  //clock.restore(); 
});
