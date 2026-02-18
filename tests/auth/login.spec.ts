import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import loginData from '../../test-data/loginData.json'


test('Verify user can login to SauceDemo Successfully', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const inventoryPage = new InventoryPage(page);

  const cartPage = new CartPage(page);
  // await page.goto('https://www.saucedemo.com/');

  // await page.getByPlaceholder('Username').fill('standard_user')
  // await page.getByPlaceholder('Password').fill('secret_sauce')
  // await page.getByRole('button', {name:'Login'}).click();

  await loginPage.navigate();

  // await loginPage.login_credentials('standard_user', 'secret_sauce')
  await loginPage.login_credentials(
    loginData.validUser.username,
    loginData.validUser.password
  )

  await inventoryPage.verifyOnInventoryPage();

  // await inventoryPage.addProductToCart('Sauce Labs Backpack');
  await inventoryPage.addProductToCart(
    loginData.product.name
  )

  await inventoryPage.navigateToCart();

  // await cartPage.verifyOnCartPage('Sauce Labs Backpack');
  await cartPage.verifyOnCartPage(
    loginData.product.name
  )

  // await inventoryPage.getProductCount();

  // await inventoryPage.verifyProductCount(6);

  // console.log(await page.url())

  // await expect(page).toHaveURL(/inventory/);
  // await expect(page.getByText('Products')).toBeVisible();

  // const products = page.locator('.inventory_item')
  // await expect(products).toHaveCount(6);


});
