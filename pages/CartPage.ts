import { Page, expect } from "@playwright/test";

export class CartPage{

    readonly page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async verifyOnCartPage(productname: string){
        await expect(this.page).toHaveURL(/cart/);

        await expect(this.page.getByText(productname)).toBeVisible();
    }

    
}