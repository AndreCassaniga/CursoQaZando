import { test, expect } from '@playwright/test';
//import { CredenciaisHelper } from '../CredenciaisHelper';


test('Teste de login', async ({ page }) => {

    await page.goto('/');
    await expect(page.getByText('myaAPI')).toBeVisible();
});

test('Teste de login 2 ', async ({ page }) => {

    await page.goto('/');
    await expect(page.getByText('myaAPI')).toBeVisible();
});