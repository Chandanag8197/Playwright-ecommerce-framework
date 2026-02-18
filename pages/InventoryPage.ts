import {Page, expect} from '@playwright/test';

export class  InventoryPage {
    readonly page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async verifyOnInventoryPage(){
        await expect(this.page).toHaveURL(/inventory/)
        await expect(this.page.getByText('Products')).toBeVisible();
    }

    async addProductToCart(productname: string){
       const product = this.page.locator('.inventory_item').filter({hasText:productname});

       await product.getByRole('button', {name:'Add to cart'}).click();
    }

    async navigateToCart(){
        await this.page.locator('.shopping_cart_link').click();
    }



    // async getProductCount(){
    //     return await this.page.locator('.inventory_item').count();
    // }

    // async verifyProductCount(expectedCount: number){
    //     await expect(this.page.locator('.inventory_item')).toHaveCount(expectedCount)
    // }
}