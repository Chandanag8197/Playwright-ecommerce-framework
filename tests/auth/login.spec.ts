import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Verify user can login to SauceDemo Successfully', async ({ page }) => {

  const loginPage = new LoginPage(page);

  // await page.goto('https://www.saucedemo.com/');

  // await page.getByPlaceholder('Username').fill('standard_user')
  // await page.getByPlaceholder('Password').fill('secret_sauce')
  // await page.getByRole('button', {name:'Login'}).click();

  await loginPage.navigate();

  await loginPage.login_credentials('standard_user', 'secret_sauce')

  console.log(await page.url())

  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText('Products')).toBeVisible();

  // const products = page.locator('.inventory_item')
  // await expect(products).toHaveCount(6);
});
