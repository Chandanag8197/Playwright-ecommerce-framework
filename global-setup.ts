import { chromium, FullConfig } from "@playwright/test";
import {ENV} from "./config/env"
import loginData from "./test-data/loginData.json"

async function globalSetup(config: FullConfig) {

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(ENV.baseURL);
    await page.getByPlaceholder('Username').fill(loginData.validUser.username)
    await page.getByPlaceholder('Password').fill(loginData.validUser.password)
    await page.getByRole('button', {name: 'Login'}).click();
    
    await page.context().storageState({path: 'storageState.json'});

    await browser.close();
}

export default globalSetup;