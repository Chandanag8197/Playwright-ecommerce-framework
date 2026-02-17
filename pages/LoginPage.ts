import { Page } from "@playwright/test";

export class LoginPage{

    readonly page:Page;

    constructor (page:Page){
        this.page = page;
    }

async navigate(){
    await this.page.goto('https://www.saucedemo.com/')
}

async login_credentials(username: string, password: string){
    await this.page.getByPlaceholder('Username').fill(username);
    await this.page.getByPlaceholder('Password').fill(password);
    await this.page.getByRole('button', {name:'Login'}).click();
}

}