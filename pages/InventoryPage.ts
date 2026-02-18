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

    async getProductCount(){
        return await this.page.locator('.inventory_item').count();
    }

    async verifyProductCount(expectedCount: number){
        await expect(this.page.locator('.inventory_item')).toHaveCount(expectedCount)
    }
}