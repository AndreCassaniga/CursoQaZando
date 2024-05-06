import { test as setup } from "@playwright/test";

const TOKEN_FILEPATH = "playwright/.auth/user.json";

setup('authenticate', async ({ page }) => {
    await page.goto('https://my.api.org/');
    await page.goto('https://my.api.org/Account/Login');
    await page.getByLabel('Email').fill('cursoqazando@mailinator.com');
    await page.getByLabel('Password').fill('ba7NqHtEha@5g@t');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(5000);
    await page.context().storageState({ path: TOKEN_FILEPATH});

})
