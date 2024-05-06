// @ts-check
const { test, expect } = require('@playwright/test');
const sinon = require('sinon');

test.use({
  viewport: { width: 1600, height: 1200 },
});

test.use({
  geolocation: { latitude: 40.416775, longitude: -3.703790 },
  permissions: ['geolocation'],
});

test.use({
  locale: 'es-ES',
  timezoneId: 'Europe/Madrid',
});

test('Login com sucesso', async ({ page }) => {
  const clock = sinon.useFakeTimers(new Date('2024-05-01T12:00:00Z').getTime());
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('cassa@bug.com.br');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toContainText('Login realizado');
  clock.restore(); 
});